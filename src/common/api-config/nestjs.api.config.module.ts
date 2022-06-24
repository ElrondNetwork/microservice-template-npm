import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import configuration from "../../../config/configuration";
import { NestjsApiConfigService } from "./nestjs.api.config.service";

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [
    NestjsApiConfigService,
  ],
  exports: [
    NestjsApiConfigService,
  ],
})
export class NestjsApiConfigModule { }
