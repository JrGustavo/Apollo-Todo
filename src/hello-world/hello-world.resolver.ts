import {Args, Float, Int, Query, Resolver} from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

    @Query(() => String, {description: 'Hola mundo es lo que retorna', name: 'hello'} )
    helloWorld (): string{
        return 'Hola Mundo';
    }

@Query ( () => Float, { name: 'randomNumber'})
getRandomNumber(): number {
    return Math.random() *100;
    }

    @Query (() => Int, { name: 'randmonFromZeroTo', description: 'From Zero to argument To'})
    getRandmonFromZeroTo( @Args('to', {type: () => Int}) to: number ): number {
        return Math.floor(Math.random() *10);
    }

}