import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageModelServiceBase } from "./base/imageModel.service.base";

@Injectable()
export class ImageModelService extends ImageModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
