import * as graphql from "@nestjs/graphql";
import { ImageModelResolverBase } from "./base/imageModel.resolver.base";
import { ImageModel } from "./base/ImageModel";
import { ImageModelService } from "./imageModel.service";

@graphql.Resolver(() => ImageModel)
export class ImageModelResolver extends ImageModelResolverBase {
  constructor(protected readonly service: ImageModelService) {
    super(service);
  }
}
