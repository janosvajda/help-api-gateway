/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "virtual_hat";

export interface CreateVirtualHatRequest {
  value: number;
  userId: number;
}

export interface CreateVirtualHatResponse {
  status: number;
  error: string[];
  id: number;
}

export const VIRTUAL_HAT_PACKAGE_NAME = "virtual_hat";

export interface VirtualHatServiceClient {
  createVirtualHat(
    request: CreateVirtualHatRequest
  ): Observable<CreateVirtualHatResponse>;
}

export interface VirtualHatServiceController {
  createVirtualHat(
    request: CreateVirtualHatRequest
  ):
    | Promise<CreateVirtualHatResponse>
    | Observable<CreateVirtualHatResponse>
    | CreateVirtualHatResponse;
}

export function VirtualHatServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createVirtualHat"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcMethod("VirtualHatService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method
      );
      GrpcStreamMethod("VirtualHatService", method)(
        constructor.prototype[method],
        method,
        descriptor
      );
    }
  };
}

export const VIRTUAL_HAT_SERVICE_NAME = "VirtualHatService";
