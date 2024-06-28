import * as graphql from "@nestjs/graphql";
import { TrendResolverBase } from "./base/trend.resolver.base";
import { Trend } from "./base/Trend";
import { TrendService } from "./trend.service";

@graphql.Resolver(() => Trend)
export class TrendResolver extends TrendResolverBase {
  constructor(protected readonly service: TrendService) {
    super(service);
  }
}
