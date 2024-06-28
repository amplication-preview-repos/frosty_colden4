import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ImageModelService } from "./imageModel.service";
import { ImageModelControllerBase } from "./base/imageModel.controller.base";

@swagger.ApiTags("imageModels")
@common.Controller("imageModels")
export class ImageModelController extends ImageModelControllerBase {
  constructor(protected readonly service: ImageModelService) {
    super(service);
  }
}
