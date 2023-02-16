import { Query, Resolver } from "@nestjs/graphql";


@Resolver(of => String)
export class AppResolver{
    
    @Query(returns => String)
    indexedDB(){
        return "This is over test and one Required Resolver to run application with graphql support"
    }
}