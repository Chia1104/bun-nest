import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Index")
@Controller()
export class AppController {
  @Get()
  getProducts() {
    return {
      date: `date: ${new Date().toISOString()}`,
      controller: {
        "GET /": "This page",
        "GET /api/documentation": "Swagger documentation",
        "GET /graphql": "GraphQL playground",
      },
    };
  }
}
