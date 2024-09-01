/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './helloworld.pb';
import {
  GRPC_GREETER_CLIENT_SETTINGS,
  GRPC_GREETER_MY_CLIENT_SETTINGS,
  GRPC_USERS_CLIENT_SETTINGS,
  GRPC_USERS_STREAM_CLIENT_SETTINGS
} from './helloworld.pbconf';
/**
 * Service client implementation for helloworld.Greeter
 */
@Injectable({ providedIn: 'any' })
export class GreeterClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /helloworld.Greeter/SayHello
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.HelloReply>>
     */
    sayHello: (
      requestData: thisProto.HelloRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.HelloReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/helloworld.Greeter/SayHello',
        requestData,
        requestMetadata,
        requestClass: thisProto.HelloRequest,
        responseClass: thisProto.HelloReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_GREETER_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('helloworld.Greeter', settings);
  }

  /**
   * Unary call @/helloworld.Greeter/SayHello
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.HelloReply>
   */
  sayHello(
    requestData: thisProto.HelloRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.HelloReply> {
    return this.$raw
      .sayHello(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for helloworld.GreeterMy
 */
@Injectable({ providedIn: 'any' })
export class GreeterMyClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /helloworld.GreeterMy/SayHelloMy
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.HelloReplyMy>>
     */
    sayHelloMy: (
      requestData: thisProto.HelloRequestMy,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.HelloReplyMy>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/helloworld.GreeterMy/SayHelloMy',
        requestData,
        requestMetadata,
        requestClass: thisProto.HelloRequestMy,
        responseClass: thisProto.HelloReplyMy
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_GREETER_MY_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('helloworld.GreeterMy', settings);
  }

  /**
   * Unary call @/helloworld.GreeterMy/SayHelloMy
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.HelloReplyMy>
   */
  sayHelloMy(
    requestData: thisProto.HelloRequestMy,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.HelloReplyMy> {
    return this.$raw
      .sayHelloMy(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for helloworld.Users
 */
@Injectable({ providedIn: 'any' })
export class UsersClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /helloworld.Users/GetUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserList>>
     */
    getUsers: (
      requestData: thisProto.HelloRequestMy,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserList>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/helloworld.Users/GetUsers',
        requestData,
        requestMetadata,
        requestClass: thisProto.HelloRequestMy,
        responseClass: thisProto.UserList
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('helloworld.Users', settings);
  }

  /**
   * Unary call @/helloworld.Users/GetUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserList>
   */
  getUsers(
    requestData: thisProto.HelloRequestMy,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserList> {
    return this.$raw
      .getUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
/**
 * Service client implementation for helloworld.UsersStream
 */
@Injectable({ providedIn: 'any' })
export class UsersStreamClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming: /helloworld.UsersStream/GetUsers
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.UserList>>
     */
    getUsers: (
      requestData: thisProto.HelloRequestMy,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.UserList>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/helloworld.UsersStream/GetUsers',
        requestData,
        requestMetadata,
        requestClass: thisProto.HelloRequestMy,
        responseClass: thisProto.UserList
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USERS_STREAM_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'helloworld.UsersStream',
      settings
    );
  }

  /**
   * Server streaming @/helloworld.UsersStream/GetUsers
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.UserList>
   */
  getUsers(
    requestData: thisProto.HelloRequestMy,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.UserList> {
    return this.$raw
      .getUsers(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
