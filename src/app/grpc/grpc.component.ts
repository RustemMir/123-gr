import {Component, ElementRef, ViewChild} from "@angular/core";
import {Subscription} from "rxjs";
import {GrpcEvent, GrpcStatusEvent} from "@ngx-grpc/common";
import {EchoServiceClient} from "../proto/echo.pbsc";
import {EchoRequest, EchoResponse} from "../proto/echo.pb";
import {Timestamp} from "@ngx-grpc/well-known-types";
import {
  GreeterClient,
  GreeterMyClient,
  UsersClient,
  UsersStreamClient
} from "../proto/helloworld.pbsc";
import {HelloRequest, HelloRequestMy, User, UserList} from "../proto/helloworld.pb";
import {Archive} from "../state/grpc/grpc.model";
import {GrpcActions} from "../state/grpc/grpc.action";
import {Store} from "@ngrx/store";

enum ExampleEventType {
  request,
  success,
  status,
  error,
  complete,
}

interface ExampleEvent {
  type: ExampleEventType;
  request?: EchoRequest;
  response?: EchoResponse;
  status?: GrpcStatusEvent;
  error?: GrpcStatusEvent;
}

@Component({
  selector: 'app-example-page',
  templateUrl: './grpc.component.html',
  styleUrls: ['./grpc.component.css'],
})

export class GrpcComponent {
  events: ExampleEvent[] = [];

  ExampleEventType = ExampleEventType;

  receiveAllEvents = false;
  shouldThrow = false;

  response: string = "";
  message1: string = "";
  message2: string = "";
  count: number = 10;

  @ViewChild('content') private contentRef: ElementRef<HTMLDivElement>;

  private sub: Subscription;
  private callNumber = 0;

  constructor(
      private echoClient: EchoServiceClient,
      private greeterClient: GreeterClient,
      private greeterClientMy: GreeterMyClient,
      private userList: UsersClient,
      private userListStream: UsersStreamClient,
      private store: Store
  ) { }


  hello() {
    const helloRequest = new HelloRequest();
    helloRequest.name = "hello World Рустем";
    this.greeterClient.sayHello(helloRequest).subscribe(
        resprnse => {
          console.log(resprnse.message);
          this.response = resprnse.message;
        }
    );
  }

  helloMy() {
    const helloRequestMy = new HelloRequestMy();
    helloRequestMy.name = "привет Рустем";
    helloRequestMy.count = 0;
    this.greeterClientMy.sayHelloMy(helloRequestMy).subscribe(
        response => {
          console.log(response.message1);
          console.log(response.message2);
          console.log(response.count);
          this.message1 = response.message1;
          this.message2 = response.message2;
          this.count = response.count;
        }
    )
  }

  onUsers() {
    const users = new HelloRequestMy();
    users.name = "привет Рустем";
    users.count = 0;
    this.userList.getUsers(users).subscribe(
        response => {
          console.log(response.users);
        }
    )
  }

  // потоковая передача данных
  onUsersStream() {
    const users = new HelloRequestMy();
    users.name = "привет Рустем";
    users.count = 0;
    let row1: Archive = {
      internalId: "internalId",
      date: "date",
      id: 0,
      name: "name",
      email: "email",
      gender: "gender",
      status: "status",
    };
    this.userListStream.getUsers(users).subscribe(
        response => {
          let row = {...row1}
          console.log("response.users:");
         // this.store.dispatch(GrpcActions.addRow({row}));
          row.internalId = crypto.randomUUID().toString();
          row.date = Date.now().toString();
          row.id = response.users[0].id
          row.name = response.users[0].name;
          row.email = response.users[0].email;
          row.gender = response.users[0].gender;
          row.status = response.users[0].status;
          console.log(row)

          this.store.dispatch(GrpcActions.addRow({row}));
        }
    )
  }

  private  setData(value: User[]): Archive | undefined{
    const archive: Archive = {
      internalId: crypto.randomUUID(),
      date: Date.now().toString(),
      id: value[0].id,
      name: value[0].name,
      email: value[0].email,
      gender: value[0].gender,
      status: value[0].status
    }
    return archive;
  }

  echo() {
    this.reset();

    const request = this.createRequest();

    this.displayExampleEvent({ type: ExampleEventType.request, request });

    if (this.receiveAllEvents === false) {
      this.sub = this.echoClient.echoOnce(request).subscribe(
          response => this.displayExampleEvent({ type: ExampleEventType.success, response }),
          error => this.displayExampleEvent({ type: ExampleEventType.error, error }),
          () => this.displayExampleEvent({ type: ExampleEventType.complete }),
      );
    } else {
      this.sub = this.echoClient.$raw.echoOnce(request).subscribe(
          event => this.displayGrpcEvent(event),
          () => null, // no errors expected in this mode
          () => this.displayExampleEvent({ type: ExampleEventType.complete }),
      );
    }
  }

  reset() {
    if (this.sub) {
      this.sub.unsubscribe();
    }

    this.events = [];
  }

  private createRequest() {
    this.callNumber++;

    return new EchoRequest({
      message: 'Call #' + this.callNumber,
      shouldThrow: this.shouldThrow,
      timestamp: Timestamp.fromDate(new Date()),
    });
  }

  private displayGrpcEvent(event: GrpcEvent<EchoResponse>) {
    if (event instanceof GrpcStatusEvent) {
      this.displayExampleEvent({ type: ExampleEventType.status, status: event });
    } else {
      this.displayExampleEvent({ type: ExampleEventType.success, response: event.data });
    }
  }

  private displayExampleEvent(event: ExampleEvent) {
    this.events.push(event);
    setTimeout(() => this.contentRef.nativeElement.scrollTop = 1e7);
  }
}