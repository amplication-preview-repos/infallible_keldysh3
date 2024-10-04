import { Module } from "@nestjs/common";
import { SessionModule } from "./session/session.module";
import { ActivityModule } from "./activity/activity.module";
import { VenueModule } from "./venue/venue.module";
import { BookingModule } from "./booking/booking.module";
import { PostModule } from "./post/post.module";
import { CharityModule } from "./charity/charity.module";
import { TransactionModule } from "./transaction/transaction.module";
import { UserModule } from "./user/user.module";
import { MessageModule } from "./message/message.module";
import { ConversationModule } from "./conversation/conversation.module";
import { ConversationParticipantModule } from "./conversationParticipant/conversationParticipant.module";
import { EntityMediaModule } from "./entityMedia/entityMedia.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ACLModule,
    AuthModule,
    SessionModule,
    ActivityModule,
    VenueModule,
    BookingModule,
    PostModule,
    CharityModule,
    TransactionModule,
    UserModule,
    MessageModule,
    ConversationModule,
    ConversationParticipantModule,
    EntityMediaModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
