import { Module } from "@nestjs/common";
import { TrendModuleBase } from "./base/trend.module.base";
import { TrendService } from "./trend.service";
import { TrendController } from "./trend.controller";
import { TrendResolver } from "./trend.resolver";

@Module({
  imports: [TrendModuleBase],
  controllers: [TrendController],
  providers: [TrendService, TrendResolver],
  exports: [TrendService],
})
export class TrendModule {}
