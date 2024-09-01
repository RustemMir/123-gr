/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';

/**
 * Message implementation for helloworld.HelloRequest
 */
export class HelloRequest implements GrpcMessage {
  static id = 'helloworld.HelloRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloRequest();
    HelloRequest.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    HelloRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HelloRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    HelloRequest.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloRequest.AsObject {
    return {
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module HelloRequest {
  /**
   * Standard JavaScript object representation for HelloRequest
   */
  export interface AsObject {
    name: string;
  }

  /**
   * Protobuf JSON representation for HelloRequest
   */
  export interface AsProtobufJSON {
    name: string;
  }
}

/**
 * Message implementation for helloworld.HelloReply
 */
export class HelloReply implements GrpcMessage {
  static id = 'helloworld.HelloReply';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloReply();
    HelloReply.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloReply) {
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloReply,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    HelloReply.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: HelloReply, _writer: BinaryWriter) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
  }

  private _message: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloReply to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloReply.AsObject>) {
    _value = _value || {};
    this.message = _value.message;
    HelloReply.refineValues(this);
  }
  get message(): string {
    return this._message;
  }
  set message(value: string) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloReply.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloReply.AsObject {
    return {
      message: this.message
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloReply.AsProtobufJSON {
    return {
      message: this.message
    };
  }
}
export module HelloReply {
  /**
   * Standard JavaScript object representation for HelloReply
   */
  export interface AsObject {
    message: string;
  }

  /**
   * Protobuf JSON representation for HelloReply
   */
  export interface AsProtobufJSON {
    message: string;
  }
}

/**
 * Message implementation for helloworld.HelloRequestMy
 */
export class HelloRequestMy implements GrpcMessage {
  static id = 'helloworld.HelloRequestMy';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloRequestMy();
    HelloRequestMy.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloRequestMy) {
    _instance.name = _instance.name || '';
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloRequestMy,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        case 2:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    HelloRequestMy.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HelloRequestMy,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
    if (_instance.count) {
      _writer.writeInt32(2, _instance.count);
    }
  }

  private _name: string;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloRequestMy to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloRequestMy.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    this.count = _value.count;
    HelloRequestMy.refineValues(this);
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloRequestMy.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloRequestMy.AsObject {
    return {
      name: this.name,
      count: this.count
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloRequestMy.AsProtobufJSON {
    return {
      name: this.name,
      count: this.count
    };
  }
}
export module HelloRequestMy {
  /**
   * Standard JavaScript object representation for HelloRequestMy
   */
  export interface AsObject {
    name: string;
    count: number;
  }

  /**
   * Protobuf JSON representation for HelloRequestMy
   */
  export interface AsProtobufJSON {
    name: string;
    count: number;
  }
}

/**
 * Message implementation for helloworld.HelloReplyMy
 */
export class HelloReplyMy implements GrpcMessage {
  static id = 'helloworld.HelloReplyMy';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new HelloReplyMy();
    HelloReplyMy.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: HelloReplyMy) {
    _instance.message1 = _instance.message1 || '';
    _instance.message2 = _instance.message2 || '';
    _instance.count = _instance.count || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: HelloReplyMy,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message1 = _reader.readString();
          break;
        case 2:
          _instance.message2 = _reader.readString();
          break;
        case 3:
          _instance.count = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    HelloReplyMy.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: HelloReplyMy,
    _writer: BinaryWriter
  ) {
    if (_instance.message1) {
      _writer.writeString(1, _instance.message1);
    }
    if (_instance.message2) {
      _writer.writeString(2, _instance.message2);
    }
    if (_instance.count) {
      _writer.writeInt32(3, _instance.count);
    }
  }

  private _message1: string;
  private _message2: string;
  private _count: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of HelloReplyMy to deeply clone from
   */
  constructor(_value?: RecursivePartial<HelloReplyMy.AsObject>) {
    _value = _value || {};
    this.message1 = _value.message1;
    this.message2 = _value.message2;
    this.count = _value.count;
    HelloReplyMy.refineValues(this);
  }
  get message1(): string {
    return this._message1;
  }
  set message1(value: string) {
    this._message1 = value;
  }
  get message2(): string {
    return this._message2;
  }
  set message2(value: string) {
    this._message2 = value;
  }
  get count(): number {
    return this._count;
  }
  set count(value: number) {
    this._count = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    HelloReplyMy.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): HelloReplyMy.AsObject {
    return {
      message1: this.message1,
      message2: this.message2,
      count: this.count
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): HelloReplyMy.AsProtobufJSON {
    return {
      message1: this.message1,
      message2: this.message2,
      count: this.count
    };
  }
}
export module HelloReplyMy {
  /**
   * Standard JavaScript object representation for HelloReplyMy
   */
  export interface AsObject {
    message1: string;
    message2: string;
    count: number;
  }

  /**
   * Protobuf JSON representation for HelloReplyMy
   */
  export interface AsProtobufJSON {
    message1: string;
    message2: string;
    count: number;
  }
}

/**
 * Message implementation for helloworld.User
 */
export class User implements GrpcMessage {
  static id = 'helloworld.User';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new User();
    User.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: User) {
    _instance.id = _instance.id || 0;
    _instance.name = _instance.name || '';
    _instance.email = _instance.email || '';
    _instance.gender = _instance.gender || '';
    _instance.status = _instance.status || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.email = _reader.readString();
          break;
        case 4:
          _instance.gender = _reader.readString();
          break;
        case 5:
          _instance.status = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    User.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.email) {
      _writer.writeString(3, _instance.email);
    }
    if (_instance.gender) {
      _writer.writeString(4, _instance.gender);
    }
    if (_instance.status) {
      _writer.writeString(5, _instance.status);
    }
  }

  private _id: number;
  private _name: string;
  private _email: string;
  private _gender: string;
  private _status: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of User to deeply clone from
   */
  constructor(_value?: RecursivePartial<User.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.email = _value.email;
    this.gender = _value.gender;
    this.status = _value.status;
    User.refineValues(this);
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value;
  }
  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }
  get gender(): string {
    return this._gender;
  }
  set gender(value: string) {
    this._gender = value;
  }
  get status(): string {
    return this._status;
  }
  set status(value: string) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    User.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): User.AsObject {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      status: this.status
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): User.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      gender: this.gender,
      status: this.status
    };
  }
}
export module User {
  /**
   * Standard JavaScript object representation for User
   */
  export interface AsObject {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }

  /**
   * Protobuf JSON representation for User
   */
  export interface AsProtobufJSON {
    id: number;
    name: string;
    email: string;
    gender: string;
    status: string;
  }
}

/**
 * Message implementation for helloworld.UserList
 */
export class UserList implements GrpcMessage {
  static id = 'helloworld.UserList';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserList();
    UserList.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserList) {
    _instance.users = _instance.users || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserList,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new User();
          _reader.readMessage(
            messageInitializer1,
            User.deserializeBinaryFromReader
          );
          (_instance.users = _instance.users || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    UserList.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserList, _writer: BinaryWriter) {
    if (_instance.users && _instance.users.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.users as any,
        User.serializeBinaryToWriter
      );
    }
  }

  private _users?: User[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserList to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserList.AsObject>) {
    _value = _value || {};
    this.users = (_value.users || []).map(m => new User(m));
    UserList.refineValues(this);
  }
  get users(): User[] | undefined {
    return this._users;
  }
  set users(value: User[] | undefined) {
    this._users = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UserList.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserList.AsObject {
    return {
      users: (this.users || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UserList.AsProtobufJSON {
    return {
      users: (this.users || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module UserList {
  /**
   * Standard JavaScript object representation for UserList
   */
  export interface AsObject {
    users?: User.AsObject[];
  }

  /**
   * Protobuf JSON representation for UserList
   */
  export interface AsProtobufJSON {
    users: User.AsProtobufJSON[] | null;
  }
}
