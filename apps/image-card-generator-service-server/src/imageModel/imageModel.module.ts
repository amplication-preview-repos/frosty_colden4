import { Module } from "@nestjs/common";
import { ImageModelModuleBase } from "./base/imageModel.module.base";
import { ImageModelService } from "./imageModel.service";
import { ImageModelController } from "./imageModel.controller";
import { ImageModelResolver } from "./imageModel.resolver";

@Module({
  imports: [ImageModelModuleBase],
  controllers: [ImageModelController],
  providers: [ImageModelService, ImageModelResolver],
  exports: [ImageModelService],
})
export class ImageModelModule {}
