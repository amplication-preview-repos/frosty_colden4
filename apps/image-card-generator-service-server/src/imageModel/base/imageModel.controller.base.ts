/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageModelService } from "../imageModel.service";
import { ImageModelCreateInput } from "./ImageModelCreateInput";
import { ImageModel } from "./ImageModel";
import { ImageModelFindManyArgs } from "./ImageModelFindManyArgs";
import { ImageModelWhereUniqueInput } from "./ImageModelWhereUniqueInput";
import { ImageModelUpdateInput } from "./ImageModelUpdateInput";

export class ImageModelControllerBase {
  constructor(protected readonly service: ImageModelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ImageModel })
  async createImageModel(
    @common.Body() data: ImageModelCreateInput
  ): Promise<ImageModel> {
    return await this.service.createImageModel({
      data: data,
      select: {
        apiEndpoint: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ImageModel] })
  @ApiNestedQuery(ImageModelFindManyArgs)
  async imageModels(@common.Req() request: Request): Promise<ImageModel[]> {
    const args = plainToClass(ImageModelFindManyArgs, request.query);
    return this.service.imageModels({
      ...args,
      select: {
        apiEndpoint: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ImageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async imageModel(
    @common.Param() params: ImageModelWhereUniqueInput
  ): Promise<ImageModel | null> {
    const result = await this.service.imageModel({
      where: params,
      select: {
        apiEndpoint: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ImageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateImageModel(
    @common.Param() params: ImageModelWhereUniqueInput,
    @common.Body() data: ImageModelUpdateInput
  ): Promise<ImageModel | null> {
    try {
      return await this.service.updateImageModel({
        where: params,
        data: data,
        select: {
          apiEndpoint: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ImageModel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteImageModel(
    @common.Param() params: ImageModelWhereUniqueInput
  ): Promise<ImageModel | null> {
    try {
      return await this.service.deleteImageModel({
        where: params,
        select: {
          apiEndpoint: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
