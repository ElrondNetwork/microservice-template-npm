import { Global, Module } from "@nestjs/common";
import { MetricsModule } from "../metrics/metrics.module";
import { CachingService } from "./caching.service";
import { LocalCacheService } from "./local.cache.service";

@Global()
@Module({
  imports: [
    MetricsModule,
  ],
  providers: [
    CachingService, LocalCacheService,
  ],
  exports: [
    CachingService,
  ],
})
export class CachingModule { }
