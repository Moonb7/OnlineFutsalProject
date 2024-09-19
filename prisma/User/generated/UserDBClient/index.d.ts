
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model UserPlayers
 * 
 */
export type UserPlayers = $Result.DefaultSelection<Prisma.$UserPlayersPayload>
/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model Caches
 * 
 */
export type Caches = $Result.DefaultSelection<Prisma.$CachesPayload>
/**
 * Model MatchLogs
 * 
 */
export type MatchLogs = $Result.DefaultSelection<Prisma.$MatchLogsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.userPlayers`: Exposes CRUD operations for the **UserPlayers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPlayers
    * const userPlayers = await prisma.userPlayers.findMany()
    * ```
    */
  get userPlayers(): Prisma.UserPlayersDelegate<ExtArgs>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs>;

  /**
   * `prisma.caches`: Exposes CRUD operations for the **Caches** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Caches
    * const caches = await prisma.caches.findMany()
    * ```
    */
  get caches(): Prisma.CachesDelegate<ExtArgs>;

  /**
   * `prisma.matchLogs`: Exposes CRUD operations for the **MatchLogs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchLogs
    * const matchLogs = await prisma.matchLogs.findMany()
    * ```
    */
  get matchLogs(): Prisma.MatchLogsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    UserPlayers: 'UserPlayers',
    Teams: 'Teams',
    Caches: 'Caches',
    MatchLogs: 'MatchLogs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "users" | "userPlayers" | "teams" | "caches" | "matchLogs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      UserPlayers: {
        payload: Prisma.$UserPlayersPayload<ExtArgs>
        fields: Prisma.UserPlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          findFirst: {
            args: Prisma.UserPlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          findMany: {
            args: Prisma.UserPlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>[]
          }
          create: {
            args: Prisma.UserPlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          createMany: {
            args: Prisma.UserPlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserPlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          update: {
            args: Prisma.UserPlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          deleteMany: {
            args: Prisma.UserPlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserPlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPlayersPayload>
          }
          aggregate: {
            args: Prisma.UserPlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPlayers>
          }
          groupBy: {
            args: Prisma.UserPlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPlayersCountArgs<ExtArgs>
            result: $Utils.Optional<UserPlayersCountAggregateOutputType> | number
          }
        }
      }
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      Caches: {
        payload: Prisma.$CachesPayload<ExtArgs>
        fields: Prisma.CachesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CachesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CachesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          findFirst: {
            args: Prisma.CachesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CachesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          findMany: {
            args: Prisma.CachesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>[]
          }
          create: {
            args: Prisma.CachesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          createMany: {
            args: Prisma.CachesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CachesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          update: {
            args: Prisma.CachesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          deleteMany: {
            args: Prisma.CachesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CachesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CachesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CachesPayload>
          }
          aggregate: {
            args: Prisma.CachesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCaches>
          }
          groupBy: {
            args: Prisma.CachesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CachesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CachesCountArgs<ExtArgs>
            result: $Utils.Optional<CachesCountAggregateOutputType> | number
          }
        }
      }
      MatchLogs: {
        payload: Prisma.$MatchLogsPayload<ExtArgs>
        fields: Prisma.MatchLogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchLogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchLogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          findFirst: {
            args: Prisma.MatchLogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchLogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          findMany: {
            args: Prisma.MatchLogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>[]
          }
          create: {
            args: Prisma.MatchLogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          createMany: {
            args: Prisma.MatchLogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MatchLogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          update: {
            args: Prisma.MatchLogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          deleteMany: {
            args: Prisma.MatchLogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchLogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MatchLogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchLogsPayload>
          }
          aggregate: {
            args: Prisma.MatchLogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchLogs>
          }
          groupBy: {
            args: Prisma.MatchLogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchLogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchLogsCountArgs<ExtArgs>
            result: $Utils.Optional<MatchLogsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    userPlayers: number
    teams: number
    Caches: number
    Users: number
    EnemyUsers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlayers?: boolean | UsersCountOutputTypeCountUserPlayersArgs
    teams?: boolean | UsersCountOutputTypeCountTeamsArgs
    Caches?: boolean | UsersCountOutputTypeCountCachesArgs
    Users?: boolean | UsersCountOutputTypeCountUsersArgs
    EnemyUsers?: boolean | UsersCountOutputTypeCountEnemyUsersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUserPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlayersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CachesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchLogsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountEnemyUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchLogsWhereInput
  }


  /**
   * Count Type UserPlayersCountOutputType
   */

  export type UserPlayersCountOutputType = {
    UserPlayer1: number
    UserPlayer2: number
    UserPlayer3: number
  }

  export type UserPlayersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserPlayer1?: boolean | UserPlayersCountOutputTypeCountUserPlayer1Args
    UserPlayer2?: boolean | UserPlayersCountOutputTypeCountUserPlayer2Args
    UserPlayer3?: boolean | UserPlayersCountOutputTypeCountUserPlayer3Args
  }

  // Custom InputTypes
  /**
   * UserPlayersCountOutputType without action
   */
  export type UserPlayersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayersCountOutputType
     */
    select?: UserPlayersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserPlayersCountOutputType without action
   */
  export type UserPlayersCountOutputTypeCountUserPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * UserPlayersCountOutputType without action
   */
  export type UserPlayersCountOutputTypeCountUserPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }

  /**
   * UserPlayersCountOutputType without action
   */
  export type UserPlayersCountOutputTypeCountUserPlayer3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    userId: number | null
    rating: number | null
  }

  export type UsersSumAggregateOutputType = {
    userId: number | null
    rating: number | null
  }

  export type UsersMinAggregateOutputType = {
    userId: number | null
    name: string | null
    password: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    userId: number | null
    name: string | null
    password: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    userId: number
    name: number
    password: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    userId?: true
    rating?: true
  }

  export type UsersSumAggregateInputType = {
    userId?: true
    rating?: true
  }

  export type UsersMinAggregateInputType = {
    userId?: true
    name?: true
    password?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    userId?: true
    name?: true
    password?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    userId?: true
    name?: true
    password?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    userId: number
    name: string
    password: string
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userPlayers?: boolean | Users$userPlayersArgs<ExtArgs>
    teams?: boolean | Users$teamsArgs<ExtArgs>
    Caches?: boolean | Users$CachesArgs<ExtArgs>
    Users?: boolean | Users$UsersArgs<ExtArgs>
    EnemyUsers?: boolean | Users$EnemyUsersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>


  export type UsersSelectScalar = {
    userId?: boolean
    name?: boolean
    password?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPlayers?: boolean | Users$userPlayersArgs<ExtArgs>
    teams?: boolean | Users$teamsArgs<ExtArgs>
    Caches?: boolean | Users$CachesArgs<ExtArgs>
    Users?: boolean | Users$UsersArgs<ExtArgs>
    EnemyUsers?: boolean | Users$EnemyUsersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      userPlayers: Prisma.$UserPlayersPayload<ExtArgs>[]
      teams: Prisma.$TeamsPayload<ExtArgs>[]
      Caches: Prisma.$CachesPayload<ExtArgs>[]
      Users: Prisma.$MatchLogsPayload<ExtArgs>[]
      EnemyUsers: Prisma.$MatchLogsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      name: string
      password: string
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const usersWithUserIdOnly = await prisma.users.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPlayers<T extends Users$userPlayersArgs<ExtArgs> = {}>(args?: Subset<T, Users$userPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findMany"> | Null>
    teams<T extends Users$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Users$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany"> | Null>
    Caches<T extends Users$CachesArgs<ExtArgs> = {}>(args?: Subset<T, Users$CachesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findMany"> | Null>
    Users<T extends Users$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findMany"> | Null>
    EnemyUsers<T extends Users$EnemyUsersArgs<ExtArgs> = {}>(args?: Subset<T, Users$EnemyUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly userId: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly rating: FieldRef<"Users", 'Int'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }

  /**
   * Users.userPlayers
   */
  export type Users$userPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    where?: UserPlayersWhereInput
    orderBy?: UserPlayersOrderByWithRelationInput | UserPlayersOrderByWithRelationInput[]
    cursor?: UserPlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPlayersScalarFieldEnum | UserPlayersScalarFieldEnum[]
  }

  /**
   * Users.teams
   */
  export type Users$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Users.Caches
   */
  export type Users$CachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    where?: CachesWhereInput
    orderBy?: CachesOrderByWithRelationInput | CachesOrderByWithRelationInput[]
    cursor?: CachesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CachesScalarFieldEnum | CachesScalarFieldEnum[]
  }

  /**
   * Users.Users
   */
  export type Users$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    where?: MatchLogsWhereInput
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    cursor?: MatchLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchLogsScalarFieldEnum | MatchLogsScalarFieldEnum[]
  }

  /**
   * Users.EnemyUsers
   */
  export type Users$EnemyUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    where?: MatchLogsWhereInput
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    cursor?: MatchLogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchLogsScalarFieldEnum | MatchLogsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model UserPlayers
   */

  export type AggregateUserPlayers = {
    _count: UserPlayersCountAggregateOutputType | null
    _avg: UserPlayersAvgAggregateOutputType | null
    _sum: UserPlayersSumAggregateOutputType | null
    _min: UserPlayersMinAggregateOutputType | null
    _max: UserPlayersMaxAggregateOutputType | null
  }

  export type UserPlayersAvgAggregateOutputType = {
    userPlayerId: number | null
    userId: number | null
    playerId: number | null
    count: number | null
    upgrade: number | null
  }

  export type UserPlayersSumAggregateOutputType = {
    userPlayerId: number | null
    userId: number | null
    playerId: number | null
    count: number | null
    upgrade: number | null
  }

  export type UserPlayersMinAggregateOutputType = {
    userPlayerId: number | null
    userId: number | null
    playerId: number | null
    count: number | null
    upgrade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlayersMaxAggregateOutputType = {
    userPlayerId: number | null
    userId: number | null
    playerId: number | null
    count: number | null
    upgrade: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPlayersCountAggregateOutputType = {
    userPlayerId: number
    userId: number
    playerId: number
    count: number
    upgrade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserPlayersAvgAggregateInputType = {
    userPlayerId?: true
    userId?: true
    playerId?: true
    count?: true
    upgrade?: true
  }

  export type UserPlayersSumAggregateInputType = {
    userPlayerId?: true
    userId?: true
    playerId?: true
    count?: true
    upgrade?: true
  }

  export type UserPlayersMinAggregateInputType = {
    userPlayerId?: true
    userId?: true
    playerId?: true
    count?: true
    upgrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlayersMaxAggregateInputType = {
    userPlayerId?: true
    userId?: true
    playerId?: true
    count?: true
    upgrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPlayersCountAggregateInputType = {
    userPlayerId?: true
    userId?: true
    playerId?: true
    count?: true
    upgrade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlayers to aggregate.
     */
    where?: UserPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlayers to fetch.
     */
    orderBy?: UserPlayersOrderByWithRelationInput | UserPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPlayers
    **/
    _count?: true | UserPlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPlayersMaxAggregateInputType
  }

  export type GetUserPlayersAggregateType<T extends UserPlayersAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPlayers[P]>
      : GetScalarType<T[P], AggregateUserPlayers[P]>
  }




  export type UserPlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPlayersWhereInput
    orderBy?: UserPlayersOrderByWithAggregationInput | UserPlayersOrderByWithAggregationInput[]
    by: UserPlayersScalarFieldEnum[] | UserPlayersScalarFieldEnum
    having?: UserPlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPlayersCountAggregateInputType | true
    _avg?: UserPlayersAvgAggregateInputType
    _sum?: UserPlayersSumAggregateInputType
    _min?: UserPlayersMinAggregateInputType
    _max?: UserPlayersMaxAggregateInputType
  }

  export type UserPlayersGroupByOutputType = {
    userPlayerId: number
    userId: number
    playerId: number
    count: number
    upgrade: number
    createdAt: Date
    updatedAt: Date
    _count: UserPlayersCountAggregateOutputType | null
    _avg: UserPlayersAvgAggregateOutputType | null
    _sum: UserPlayersSumAggregateOutputType | null
    _min: UserPlayersMinAggregateOutputType | null
    _max: UserPlayersMaxAggregateOutputType | null
  }

  type GetUserPlayersGroupByPayload<T extends UserPlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPlayersGroupByOutputType[P]>
            : GetScalarType<T[P], UserPlayersGroupByOutputType[P]>
        }
      >
    >


  export type UserPlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userPlayerId?: boolean
    userId?: boolean
    playerId?: boolean
    count?: boolean
    upgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    UserPlayer1?: boolean | UserPlayers$UserPlayer1Args<ExtArgs>
    UserPlayer2?: boolean | UserPlayers$UserPlayer2Args<ExtArgs>
    UserPlayer3?: boolean | UserPlayers$UserPlayer3Args<ExtArgs>
    _count?: boolean | UserPlayersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPlayers"]>


  export type UserPlayersSelectScalar = {
    userPlayerId?: boolean
    userId?: boolean
    playerId?: boolean
    count?: boolean
    upgrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    UserPlayer1?: boolean | UserPlayers$UserPlayer1Args<ExtArgs>
    UserPlayer2?: boolean | UserPlayers$UserPlayer2Args<ExtArgs>
    UserPlayer3?: boolean | UserPlayers$UserPlayer3Args<ExtArgs>
    _count?: boolean | UserPlayersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPlayers"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      UserPlayer1: Prisma.$TeamsPayload<ExtArgs>[]
      UserPlayer2: Prisma.$TeamsPayload<ExtArgs>[]
      UserPlayer3: Prisma.$TeamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userPlayerId: number
      userId: number
      playerId: number
      count: number
      upgrade: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userPlayers"]>
    composites: {}
  }

  type UserPlayersGetPayload<S extends boolean | null | undefined | UserPlayersDefaultArgs> = $Result.GetResult<Prisma.$UserPlayersPayload, S>

  type UserPlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserPlayersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserPlayersCountAggregateInputType | true
    }

  export interface UserPlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPlayers'], meta: { name: 'UserPlayers' } }
    /**
     * Find zero or one UserPlayers that matches the filter.
     * @param {UserPlayersFindUniqueArgs} args - Arguments to find a UserPlayers
     * @example
     * // Get one UserPlayers
     * const userPlayers = await prisma.userPlayers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPlayersFindUniqueArgs>(args: SelectSubset<T, UserPlayersFindUniqueArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserPlayers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserPlayersFindUniqueOrThrowArgs} args - Arguments to find a UserPlayers
     * @example
     * // Get one UserPlayers
     * const userPlayers = await prisma.userPlayers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersFindFirstArgs} args - Arguments to find a UserPlayers
     * @example
     * // Get one UserPlayers
     * const userPlayers = await prisma.userPlayers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPlayersFindFirstArgs>(args?: SelectSubset<T, UserPlayersFindFirstArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserPlayers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersFindFirstOrThrowArgs} args - Arguments to find a UserPlayers
     * @example
     * // Get one UserPlayers
     * const userPlayers = await prisma.userPlayers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPlayers
     * const userPlayers = await prisma.userPlayers.findMany()
     * 
     * // Get first 10 UserPlayers
     * const userPlayers = await prisma.userPlayers.findMany({ take: 10 })
     * 
     * // Only select the `userPlayerId`
     * const userPlayersWithUserPlayerIdOnly = await prisma.userPlayers.findMany({ select: { userPlayerId: true } })
     * 
     */
    findMany<T extends UserPlayersFindManyArgs>(args?: SelectSubset<T, UserPlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserPlayers.
     * @param {UserPlayersCreateArgs} args - Arguments to create a UserPlayers.
     * @example
     * // Create one UserPlayers
     * const UserPlayers = await prisma.userPlayers.create({
     *   data: {
     *     // ... data to create a UserPlayers
     *   }
     * })
     * 
     */
    create<T extends UserPlayersCreateArgs>(args: SelectSubset<T, UserPlayersCreateArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserPlayers.
     * @param {UserPlayersCreateManyArgs} args - Arguments to create many UserPlayers.
     * @example
     * // Create many UserPlayers
     * const userPlayers = await prisma.userPlayers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPlayersCreateManyArgs>(args?: SelectSubset<T, UserPlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPlayers.
     * @param {UserPlayersDeleteArgs} args - Arguments to delete one UserPlayers.
     * @example
     * // Delete one UserPlayers
     * const UserPlayers = await prisma.userPlayers.delete({
     *   where: {
     *     // ... filter to delete one UserPlayers
     *   }
     * })
     * 
     */
    delete<T extends UserPlayersDeleteArgs>(args: SelectSubset<T, UserPlayersDeleteArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserPlayers.
     * @param {UserPlayersUpdateArgs} args - Arguments to update one UserPlayers.
     * @example
     * // Update one UserPlayers
     * const userPlayers = await prisma.userPlayers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPlayersUpdateArgs>(args: SelectSubset<T, UserPlayersUpdateArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserPlayers.
     * @param {UserPlayersDeleteManyArgs} args - Arguments to filter UserPlayers to delete.
     * @example
     * // Delete a few UserPlayers
     * const { count } = await prisma.userPlayers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPlayersDeleteManyArgs>(args?: SelectSubset<T, UserPlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPlayers
     * const userPlayers = await prisma.userPlayers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPlayersUpdateManyArgs>(args: SelectSubset<T, UserPlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPlayers.
     * @param {UserPlayersUpsertArgs} args - Arguments to update or create a UserPlayers.
     * @example
     * // Update or create a UserPlayers
     * const userPlayers = await prisma.userPlayers.upsert({
     *   create: {
     *     // ... data to create a UserPlayers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPlayers we want to update
     *   }
     * })
     */
    upsert<T extends UserPlayersUpsertArgs>(args: SelectSubset<T, UserPlayersUpsertArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersCountArgs} args - Arguments to filter UserPlayers to count.
     * @example
     * // Count the number of UserPlayers
     * const count = await prisma.userPlayers.count({
     *   where: {
     *     // ... the filter for the UserPlayers we want to count
     *   }
     * })
    **/
    count<T extends UserPlayersCountArgs>(
      args?: Subset<T, UserPlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPlayersAggregateArgs>(args: Subset<T, UserPlayersAggregateArgs>): Prisma.PrismaPromise<GetUserPlayersAggregateType<T>>

    /**
     * Group by UserPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPlayersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPlayersGroupByArgs['orderBy'] }
        : { orderBy?: UserPlayersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPlayers model
   */
  readonly fields: UserPlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPlayers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    UserPlayer1<T extends UserPlayers$UserPlayer1Args<ExtArgs> = {}>(args?: Subset<T, UserPlayers$UserPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany"> | Null>
    UserPlayer2<T extends UserPlayers$UserPlayer2Args<ExtArgs> = {}>(args?: Subset<T, UserPlayers$UserPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany"> | Null>
    UserPlayer3<T extends UserPlayers$UserPlayer3Args<ExtArgs> = {}>(args?: Subset<T, UserPlayers$UserPlayer3Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPlayers model
   */ 
  interface UserPlayersFieldRefs {
    readonly userPlayerId: FieldRef<"UserPlayers", 'Int'>
    readonly userId: FieldRef<"UserPlayers", 'Int'>
    readonly playerId: FieldRef<"UserPlayers", 'Int'>
    readonly count: FieldRef<"UserPlayers", 'Int'>
    readonly upgrade: FieldRef<"UserPlayers", 'Int'>
    readonly createdAt: FieldRef<"UserPlayers", 'DateTime'>
    readonly updatedAt: FieldRef<"UserPlayers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPlayers findUnique
   */
  export type UserPlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserPlayers to fetch.
     */
    where: UserPlayersWhereUniqueInput
  }

  /**
   * UserPlayers findUniqueOrThrow
   */
  export type UserPlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserPlayers to fetch.
     */
    where: UserPlayersWhereUniqueInput
  }

  /**
   * UserPlayers findFirst
   */
  export type UserPlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserPlayers to fetch.
     */
    where?: UserPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlayers to fetch.
     */
    orderBy?: UserPlayersOrderByWithRelationInput | UserPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlayers.
     */
    cursor?: UserPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlayers.
     */
    distinct?: UserPlayersScalarFieldEnum | UserPlayersScalarFieldEnum[]
  }

  /**
   * UserPlayers findFirstOrThrow
   */
  export type UserPlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserPlayers to fetch.
     */
    where?: UserPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlayers to fetch.
     */
    orderBy?: UserPlayersOrderByWithRelationInput | UserPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPlayers.
     */
    cursor?: UserPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPlayers.
     */
    distinct?: UserPlayersScalarFieldEnum | UserPlayersScalarFieldEnum[]
  }

  /**
   * UserPlayers findMany
   */
  export type UserPlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter, which UserPlayers to fetch.
     */
    where?: UserPlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPlayers to fetch.
     */
    orderBy?: UserPlayersOrderByWithRelationInput | UserPlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPlayers.
     */
    cursor?: UserPlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPlayers.
     */
    skip?: number
    distinct?: UserPlayersScalarFieldEnum | UserPlayersScalarFieldEnum[]
  }

  /**
   * UserPlayers create
   */
  export type UserPlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPlayers.
     */
    data: XOR<UserPlayersCreateInput, UserPlayersUncheckedCreateInput>
  }

  /**
   * UserPlayers createMany
   */
  export type UserPlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPlayers.
     */
    data: UserPlayersCreateManyInput | UserPlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPlayers update
   */
  export type UserPlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPlayers.
     */
    data: XOR<UserPlayersUpdateInput, UserPlayersUncheckedUpdateInput>
    /**
     * Choose, which UserPlayers to update.
     */
    where: UserPlayersWhereUniqueInput
  }

  /**
   * UserPlayers updateMany
   */
  export type UserPlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPlayers.
     */
    data: XOR<UserPlayersUpdateManyMutationInput, UserPlayersUncheckedUpdateManyInput>
    /**
     * Filter which UserPlayers to update
     */
    where?: UserPlayersWhereInput
  }

  /**
   * UserPlayers upsert
   */
  export type UserPlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPlayers to update in case it exists.
     */
    where: UserPlayersWhereUniqueInput
    /**
     * In case the UserPlayers found by the `where` argument doesn't exist, create a new UserPlayers with this data.
     */
    create: XOR<UserPlayersCreateInput, UserPlayersUncheckedCreateInput>
    /**
     * In case the UserPlayers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPlayersUpdateInput, UserPlayersUncheckedUpdateInput>
  }

  /**
   * UserPlayers delete
   */
  export type UserPlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
    /**
     * Filter which UserPlayers to delete.
     */
    where: UserPlayersWhereUniqueInput
  }

  /**
   * UserPlayers deleteMany
   */
  export type UserPlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPlayers to delete
     */
    where?: UserPlayersWhereInput
  }

  /**
   * UserPlayers.UserPlayer1
   */
  export type UserPlayers$UserPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * UserPlayers.UserPlayer2
   */
  export type UserPlayers$UserPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * UserPlayers.UserPlayer3
   */
  export type UserPlayers$UserPlayer3Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    cursor?: TeamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * UserPlayers without action
   */
  export type UserPlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPlayers
     */
    select?: UserPlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPlayersInclude<ExtArgs> | null
  }


  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsAvgAggregateOutputType = {
    teamId: number | null
    userId: number | null
    userPlayerId1: number | null
    userPlayerId2: number | null
    userPlayerId3: number | null
  }

  export type TeamsSumAggregateOutputType = {
    teamId: number | null
    userId: number | null
    userPlayerId1: number | null
    userPlayerId2: number | null
    userPlayerId3: number | null
  }

  export type TeamsMinAggregateOutputType = {
    teamId: number | null
    userId: number | null
    userPlayerId1: number | null
    userPlayerId2: number | null
    userPlayerId3: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    teamId: number | null
    userId: number | null
    userPlayerId1: number | null
    userPlayerId2: number | null
    userPlayerId3: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    teamId: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamsAvgAggregateInputType = {
    teamId?: true
    userId?: true
    userPlayerId1?: true
    userPlayerId2?: true
    userPlayerId3?: true
  }

  export type TeamsSumAggregateInputType = {
    teamId?: true
    userId?: true
    userPlayerId1?: true
    userPlayerId2?: true
    userPlayerId3?: true
  }

  export type TeamsMinAggregateInputType = {
    teamId?: true
    userId?: true
    userPlayerId1?: true
    userPlayerId2?: true
    userPlayerId3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsMaxAggregateInputType = {
    teamId?: true
    userId?: true
    userPlayerId1?: true
    userPlayerId2?: true
    userPlayerId3?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsCountAggregateInputType = {
    teamId?: true
    userId?: true
    userPlayerId1?: true
    userPlayerId2?: true
    userPlayerId3?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _avg?: TeamsAvgAggregateInputType
    _sum?: TeamsSumAggregateInputType
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    teamId: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt: Date
    updatedAt: Date
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teamId?: boolean
    userId?: boolean
    userPlayerId1?: boolean
    userPlayerId2?: boolean
    userPlayerId3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
    UserPlayer1?: boolean | UserPlayersDefaultArgs<ExtArgs>
    UserPlayer2?: boolean | UserPlayersDefaultArgs<ExtArgs>
    UserPlayer3?: boolean | UserPlayersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>


  export type TeamsSelectScalar = {
    teamId?: boolean
    userId?: boolean
    userPlayerId1?: boolean
    userPlayerId2?: boolean
    userPlayerId3?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
    UserPlayer1?: boolean | UserPlayersDefaultArgs<ExtArgs>
    UserPlayer2?: boolean | UserPlayersDefaultArgs<ExtArgs>
    UserPlayer3?: boolean | UserPlayersDefaultArgs<ExtArgs>
  }

  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
      UserPlayer1: Prisma.$UserPlayersPayload<ExtArgs>
      UserPlayer2: Prisma.$UserPlayersPayload<ExtArgs>
      UserPlayer3: Prisma.$UserPlayersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teamId: number
      userId: number
      userPlayerId1: number
      userPlayerId2: number
      userPlayerId3: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsFindUniqueArgs>(args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsFindFirstArgs>(args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `teamId`
     * const teamsWithTeamIdOnly = await prisma.teams.findMany({ select: { teamId: true } })
     * 
     */
    findMany<T extends TeamsFindManyArgs>(args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends TeamsCreateArgs>(args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teams.
     * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsCreateManyArgs>(args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends TeamsDeleteArgs>(args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsUpdateArgs>(args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsDeleteManyArgs>(args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsUpdateManyArgs>(args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends TeamsUpsertArgs>(args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    UserPlayer1<T extends UserPlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPlayersDefaultArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    UserPlayer2<T extends UserPlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPlayersDefaultArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    UserPlayer3<T extends UserPlayersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserPlayersDefaultArgs<ExtArgs>>): Prisma__UserPlayersClient<$Result.GetResult<Prisma.$UserPlayersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teams model
   */ 
  interface TeamsFieldRefs {
    readonly teamId: FieldRef<"Teams", 'Int'>
    readonly userId: FieldRef<"Teams", 'Int'>
    readonly userPlayerId1: FieldRef<"Teams", 'Int'>
    readonly userPlayerId2: FieldRef<"Teams", 'Int'>
    readonly userPlayerId3: FieldRef<"Teams", 'Int'>
    readonly createdAt: FieldRef<"Teams", 'DateTime'>
    readonly updatedAt: FieldRef<"Teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model Caches
   */

  export type AggregateCaches = {
    _count: CachesCountAggregateOutputType | null
    _avg: CachesAvgAggregateOutputType | null
    _sum: CachesSumAggregateOutputType | null
    _min: CachesMinAggregateOutputType | null
    _max: CachesMaxAggregateOutputType | null
  }

  export type CachesAvgAggregateOutputType = {
    cacheId: number | null
    userId: number | null
    cacheChange: number | null
    cacheSource: number | null
  }

  export type CachesSumAggregateOutputType = {
    cacheId: number | null
    userId: number | null
    cacheChange: number | null
    cacheSource: number | null
  }

  export type CachesMinAggregateOutputType = {
    cacheId: number | null
    userId: number | null
    cacheChange: number | null
    cacheSource: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CachesMaxAggregateOutputType = {
    cacheId: number | null
    userId: number | null
    cacheChange: number | null
    cacheSource: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CachesCountAggregateOutputType = {
    cacheId: number
    userId: number
    cacheChange: number
    cacheSource: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CachesAvgAggregateInputType = {
    cacheId?: true
    userId?: true
    cacheChange?: true
    cacheSource?: true
  }

  export type CachesSumAggregateInputType = {
    cacheId?: true
    userId?: true
    cacheChange?: true
    cacheSource?: true
  }

  export type CachesMinAggregateInputType = {
    cacheId?: true
    userId?: true
    cacheChange?: true
    cacheSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CachesMaxAggregateInputType = {
    cacheId?: true
    userId?: true
    cacheChange?: true
    cacheSource?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CachesCountAggregateInputType = {
    cacheId?: true
    userId?: true
    cacheChange?: true
    cacheSource?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CachesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caches to aggregate.
     */
    where?: CachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caches to fetch.
     */
    orderBy?: CachesOrderByWithRelationInput | CachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Caches
    **/
    _count?: true | CachesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CachesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CachesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CachesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CachesMaxAggregateInputType
  }

  export type GetCachesAggregateType<T extends CachesAggregateArgs> = {
        [P in keyof T & keyof AggregateCaches]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCaches[P]>
      : GetScalarType<T[P], AggregateCaches[P]>
  }




  export type CachesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CachesWhereInput
    orderBy?: CachesOrderByWithAggregationInput | CachesOrderByWithAggregationInput[]
    by: CachesScalarFieldEnum[] | CachesScalarFieldEnum
    having?: CachesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CachesCountAggregateInputType | true
    _avg?: CachesAvgAggregateInputType
    _sum?: CachesSumAggregateInputType
    _min?: CachesMinAggregateInputType
    _max?: CachesMaxAggregateInputType
  }

  export type CachesGroupByOutputType = {
    cacheId: number
    userId: number
    cacheChange: number
    cacheSource: number
    createdAt: Date
    updatedAt: Date
    _count: CachesCountAggregateOutputType | null
    _avg: CachesAvgAggregateOutputType | null
    _sum: CachesSumAggregateOutputType | null
    _min: CachesMinAggregateOutputType | null
    _max: CachesMaxAggregateOutputType | null
  }

  type GetCachesGroupByPayload<T extends CachesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CachesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CachesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CachesGroupByOutputType[P]>
            : GetScalarType<T[P], CachesGroupByOutputType[P]>
        }
      >
    >


  export type CachesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cacheId?: boolean
    userId?: boolean
    cacheChange?: boolean
    cacheSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["caches"]>


  export type CachesSelectScalar = {
    cacheId?: boolean
    userId?: boolean
    cacheChange?: boolean
    cacheSource?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CachesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CachesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Caches"
    objects: {
      users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cacheId: number
      userId: number
      cacheChange: number
      cacheSource: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["caches"]>
    composites: {}
  }

  type CachesGetPayload<S extends boolean | null | undefined | CachesDefaultArgs> = $Result.GetResult<Prisma.$CachesPayload, S>

  type CachesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CachesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CachesCountAggregateInputType | true
    }

  export interface CachesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Caches'], meta: { name: 'Caches' } }
    /**
     * Find zero or one Caches that matches the filter.
     * @param {CachesFindUniqueArgs} args - Arguments to find a Caches
     * @example
     * // Get one Caches
     * const caches = await prisma.caches.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CachesFindUniqueArgs>(args: SelectSubset<T, CachesFindUniqueArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Caches that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CachesFindUniqueOrThrowArgs} args - Arguments to find a Caches
     * @example
     * // Get one Caches
     * const caches = await prisma.caches.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CachesFindUniqueOrThrowArgs>(args: SelectSubset<T, CachesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesFindFirstArgs} args - Arguments to find a Caches
     * @example
     * // Get one Caches
     * const caches = await prisma.caches.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CachesFindFirstArgs>(args?: SelectSubset<T, CachesFindFirstArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Caches that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesFindFirstOrThrowArgs} args - Arguments to find a Caches
     * @example
     * // Get one Caches
     * const caches = await prisma.caches.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CachesFindFirstOrThrowArgs>(args?: SelectSubset<T, CachesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Caches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Caches
     * const caches = await prisma.caches.findMany()
     * 
     * // Get first 10 Caches
     * const caches = await prisma.caches.findMany({ take: 10 })
     * 
     * // Only select the `cacheId`
     * const cachesWithCacheIdOnly = await prisma.caches.findMany({ select: { cacheId: true } })
     * 
     */
    findMany<T extends CachesFindManyArgs>(args?: SelectSubset<T, CachesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Caches.
     * @param {CachesCreateArgs} args - Arguments to create a Caches.
     * @example
     * // Create one Caches
     * const Caches = await prisma.caches.create({
     *   data: {
     *     // ... data to create a Caches
     *   }
     * })
     * 
     */
    create<T extends CachesCreateArgs>(args: SelectSubset<T, CachesCreateArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Caches.
     * @param {CachesCreateManyArgs} args - Arguments to create many Caches.
     * @example
     * // Create many Caches
     * const caches = await prisma.caches.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CachesCreateManyArgs>(args?: SelectSubset<T, CachesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Caches.
     * @param {CachesDeleteArgs} args - Arguments to delete one Caches.
     * @example
     * // Delete one Caches
     * const Caches = await prisma.caches.delete({
     *   where: {
     *     // ... filter to delete one Caches
     *   }
     * })
     * 
     */
    delete<T extends CachesDeleteArgs>(args: SelectSubset<T, CachesDeleteArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Caches.
     * @param {CachesUpdateArgs} args - Arguments to update one Caches.
     * @example
     * // Update one Caches
     * const caches = await prisma.caches.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CachesUpdateArgs>(args: SelectSubset<T, CachesUpdateArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Caches.
     * @param {CachesDeleteManyArgs} args - Arguments to filter Caches to delete.
     * @example
     * // Delete a few Caches
     * const { count } = await prisma.caches.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CachesDeleteManyArgs>(args?: SelectSubset<T, CachesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Caches
     * const caches = await prisma.caches.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CachesUpdateManyArgs>(args: SelectSubset<T, CachesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Caches.
     * @param {CachesUpsertArgs} args - Arguments to update or create a Caches.
     * @example
     * // Update or create a Caches
     * const caches = await prisma.caches.upsert({
     *   create: {
     *     // ... data to create a Caches
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Caches we want to update
     *   }
     * })
     */
    upsert<T extends CachesUpsertArgs>(args: SelectSubset<T, CachesUpsertArgs<ExtArgs>>): Prisma__CachesClient<$Result.GetResult<Prisma.$CachesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesCountArgs} args - Arguments to filter Caches to count.
     * @example
     * // Count the number of Caches
     * const count = await prisma.caches.count({
     *   where: {
     *     // ... the filter for the Caches we want to count
     *   }
     * })
    **/
    count<T extends CachesCountArgs>(
      args?: Subset<T, CachesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CachesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CachesAggregateArgs>(args: Subset<T, CachesAggregateArgs>): Prisma.PrismaPromise<GetCachesAggregateType<T>>

    /**
     * Group by Caches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CachesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CachesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CachesGroupByArgs['orderBy'] }
        : { orderBy?: CachesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CachesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCachesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Caches model
   */
  readonly fields: CachesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Caches.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CachesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Caches model
   */ 
  interface CachesFieldRefs {
    readonly cacheId: FieldRef<"Caches", 'Int'>
    readonly userId: FieldRef<"Caches", 'Int'>
    readonly cacheChange: FieldRef<"Caches", 'Int'>
    readonly cacheSource: FieldRef<"Caches", 'Int'>
    readonly createdAt: FieldRef<"Caches", 'DateTime'>
    readonly updatedAt: FieldRef<"Caches", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Caches findUnique
   */
  export type CachesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter, which Caches to fetch.
     */
    where: CachesWhereUniqueInput
  }

  /**
   * Caches findUniqueOrThrow
   */
  export type CachesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter, which Caches to fetch.
     */
    where: CachesWhereUniqueInput
  }

  /**
   * Caches findFirst
   */
  export type CachesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter, which Caches to fetch.
     */
    where?: CachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caches to fetch.
     */
    orderBy?: CachesOrderByWithRelationInput | CachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caches.
     */
    cursor?: CachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caches.
     */
    distinct?: CachesScalarFieldEnum | CachesScalarFieldEnum[]
  }

  /**
   * Caches findFirstOrThrow
   */
  export type CachesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter, which Caches to fetch.
     */
    where?: CachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caches to fetch.
     */
    orderBy?: CachesOrderByWithRelationInput | CachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Caches.
     */
    cursor?: CachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Caches.
     */
    distinct?: CachesScalarFieldEnum | CachesScalarFieldEnum[]
  }

  /**
   * Caches findMany
   */
  export type CachesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter, which Caches to fetch.
     */
    where?: CachesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Caches to fetch.
     */
    orderBy?: CachesOrderByWithRelationInput | CachesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Caches.
     */
    cursor?: CachesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Caches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Caches.
     */
    skip?: number
    distinct?: CachesScalarFieldEnum | CachesScalarFieldEnum[]
  }

  /**
   * Caches create
   */
  export type CachesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * The data needed to create a Caches.
     */
    data: XOR<CachesCreateInput, CachesUncheckedCreateInput>
  }

  /**
   * Caches createMany
   */
  export type CachesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Caches.
     */
    data: CachesCreateManyInput | CachesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Caches update
   */
  export type CachesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * The data needed to update a Caches.
     */
    data: XOR<CachesUpdateInput, CachesUncheckedUpdateInput>
    /**
     * Choose, which Caches to update.
     */
    where: CachesWhereUniqueInput
  }

  /**
   * Caches updateMany
   */
  export type CachesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Caches.
     */
    data: XOR<CachesUpdateManyMutationInput, CachesUncheckedUpdateManyInput>
    /**
     * Filter which Caches to update
     */
    where?: CachesWhereInput
  }

  /**
   * Caches upsert
   */
  export type CachesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * The filter to search for the Caches to update in case it exists.
     */
    where: CachesWhereUniqueInput
    /**
     * In case the Caches found by the `where` argument doesn't exist, create a new Caches with this data.
     */
    create: XOR<CachesCreateInput, CachesUncheckedCreateInput>
    /**
     * In case the Caches was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CachesUpdateInput, CachesUncheckedUpdateInput>
  }

  /**
   * Caches delete
   */
  export type CachesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
    /**
     * Filter which Caches to delete.
     */
    where: CachesWhereUniqueInput
  }

  /**
   * Caches deleteMany
   */
  export type CachesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Caches to delete
     */
    where?: CachesWhereInput
  }

  /**
   * Caches without action
   */
  export type CachesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Caches
     */
    select?: CachesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CachesInclude<ExtArgs> | null
  }


  /**
   * Model MatchLogs
   */

  export type AggregateMatchLogs = {
    _count: MatchLogsCountAggregateOutputType | null
    _avg: MatchLogsAvgAggregateOutputType | null
    _sum: MatchLogsSumAggregateOutputType | null
    _min: MatchLogsMinAggregateOutputType | null
    _max: MatchLogsMaxAggregateOutputType | null
  }

  export type MatchLogsAvgAggregateOutputType = {
    matchLogId: number | null
    userId: number | null
    enemyUserId: number | null
    isWin: number | null
  }

  export type MatchLogsSumAggregateOutputType = {
    matchLogId: number | null
    userId: number | null
    enemyUserId: number | null
    isWin: number | null
  }

  export type MatchLogsMinAggregateOutputType = {
    matchLogId: number | null
    userId: number | null
    enemyUserId: number | null
    isWin: number | null
    playedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchLogsMaxAggregateOutputType = {
    matchLogId: number | null
    userId: number | null
    enemyUserId: number | null
    isWin: number | null
    playedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MatchLogsCountAggregateOutputType = {
    matchLogId: number
    userId: number
    enemyUserId: number
    isWin: number
    playedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MatchLogsAvgAggregateInputType = {
    matchLogId?: true
    userId?: true
    enemyUserId?: true
    isWin?: true
  }

  export type MatchLogsSumAggregateInputType = {
    matchLogId?: true
    userId?: true
    enemyUserId?: true
    isWin?: true
  }

  export type MatchLogsMinAggregateInputType = {
    matchLogId?: true
    userId?: true
    enemyUserId?: true
    isWin?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchLogsMaxAggregateInputType = {
    matchLogId?: true
    userId?: true
    enemyUserId?: true
    isWin?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MatchLogsCountAggregateInputType = {
    matchLogId?: true
    userId?: true
    enemyUserId?: true
    isWin?: true
    playedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MatchLogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchLogs to aggregate.
     */
    where?: MatchLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchLogs
    **/
    _count?: true | MatchLogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchLogsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchLogsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchLogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchLogsMaxAggregateInputType
  }

  export type GetMatchLogsAggregateType<T extends MatchLogsAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchLogs[P]>
      : GetScalarType<T[P], AggregateMatchLogs[P]>
  }




  export type MatchLogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchLogsWhereInput
    orderBy?: MatchLogsOrderByWithAggregationInput | MatchLogsOrderByWithAggregationInput[]
    by: MatchLogsScalarFieldEnum[] | MatchLogsScalarFieldEnum
    having?: MatchLogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchLogsCountAggregateInputType | true
    _avg?: MatchLogsAvgAggregateInputType
    _sum?: MatchLogsSumAggregateInputType
    _min?: MatchLogsMinAggregateInputType
    _max?: MatchLogsMaxAggregateInputType
  }

  export type MatchLogsGroupByOutputType = {
    matchLogId: number
    userId: number
    enemyUserId: number
    isWin: number
    playedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: MatchLogsCountAggregateOutputType | null
    _avg: MatchLogsAvgAggregateOutputType | null
    _sum: MatchLogsSumAggregateOutputType | null
    _min: MatchLogsMinAggregateOutputType | null
    _max: MatchLogsMaxAggregateOutputType | null
  }

  type GetMatchLogsGroupByPayload<T extends MatchLogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchLogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchLogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchLogsGroupByOutputType[P]>
            : GetScalarType<T[P], MatchLogsGroupByOutputType[P]>
        }
      >
    >


  export type MatchLogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    matchLogId?: boolean
    userId?: boolean
    enemyUserId?: boolean
    isWin?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    EnemyUsers?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchLogs"]>


  export type MatchLogsSelectScalar = {
    matchLogId?: boolean
    userId?: boolean
    enemyUserId?: boolean
    isWin?: boolean
    playedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MatchLogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
    EnemyUsers?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $MatchLogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchLogs"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
      EnemyUsers: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      matchLogId: number
      userId: number
      enemyUserId: number
      isWin: number
      playedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["matchLogs"]>
    composites: {}
  }

  type MatchLogsGetPayload<S extends boolean | null | undefined | MatchLogsDefaultArgs> = $Result.GetResult<Prisma.$MatchLogsPayload, S>

  type MatchLogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MatchLogsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MatchLogsCountAggregateInputType | true
    }

  export interface MatchLogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchLogs'], meta: { name: 'MatchLogs' } }
    /**
     * Find zero or one MatchLogs that matches the filter.
     * @param {MatchLogsFindUniqueArgs} args - Arguments to find a MatchLogs
     * @example
     * // Get one MatchLogs
     * const matchLogs = await prisma.matchLogs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchLogsFindUniqueArgs>(args: SelectSubset<T, MatchLogsFindUniqueArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MatchLogs that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MatchLogsFindUniqueOrThrowArgs} args - Arguments to find a MatchLogs
     * @example
     * // Get one MatchLogs
     * const matchLogs = await prisma.matchLogs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchLogsFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchLogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MatchLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsFindFirstArgs} args - Arguments to find a MatchLogs
     * @example
     * // Get one MatchLogs
     * const matchLogs = await prisma.matchLogs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchLogsFindFirstArgs>(args?: SelectSubset<T, MatchLogsFindFirstArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MatchLogs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsFindFirstOrThrowArgs} args - Arguments to find a MatchLogs
     * @example
     * // Get one MatchLogs
     * const matchLogs = await prisma.matchLogs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchLogsFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchLogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MatchLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchLogs
     * const matchLogs = await prisma.matchLogs.findMany()
     * 
     * // Get first 10 MatchLogs
     * const matchLogs = await prisma.matchLogs.findMany({ take: 10 })
     * 
     * // Only select the `matchLogId`
     * const matchLogsWithMatchLogIdOnly = await prisma.matchLogs.findMany({ select: { matchLogId: true } })
     * 
     */
    findMany<T extends MatchLogsFindManyArgs>(args?: SelectSubset<T, MatchLogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MatchLogs.
     * @param {MatchLogsCreateArgs} args - Arguments to create a MatchLogs.
     * @example
     * // Create one MatchLogs
     * const MatchLogs = await prisma.matchLogs.create({
     *   data: {
     *     // ... data to create a MatchLogs
     *   }
     * })
     * 
     */
    create<T extends MatchLogsCreateArgs>(args: SelectSubset<T, MatchLogsCreateArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MatchLogs.
     * @param {MatchLogsCreateManyArgs} args - Arguments to create many MatchLogs.
     * @example
     * // Create many MatchLogs
     * const matchLogs = await prisma.matchLogs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchLogsCreateManyArgs>(args?: SelectSubset<T, MatchLogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MatchLogs.
     * @param {MatchLogsDeleteArgs} args - Arguments to delete one MatchLogs.
     * @example
     * // Delete one MatchLogs
     * const MatchLogs = await prisma.matchLogs.delete({
     *   where: {
     *     // ... filter to delete one MatchLogs
     *   }
     * })
     * 
     */
    delete<T extends MatchLogsDeleteArgs>(args: SelectSubset<T, MatchLogsDeleteArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MatchLogs.
     * @param {MatchLogsUpdateArgs} args - Arguments to update one MatchLogs.
     * @example
     * // Update one MatchLogs
     * const matchLogs = await prisma.matchLogs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchLogsUpdateArgs>(args: SelectSubset<T, MatchLogsUpdateArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MatchLogs.
     * @param {MatchLogsDeleteManyArgs} args - Arguments to filter MatchLogs to delete.
     * @example
     * // Delete a few MatchLogs
     * const { count } = await prisma.matchLogs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchLogsDeleteManyArgs>(args?: SelectSubset<T, MatchLogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchLogs
     * const matchLogs = await prisma.matchLogs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchLogsUpdateManyArgs>(args: SelectSubset<T, MatchLogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MatchLogs.
     * @param {MatchLogsUpsertArgs} args - Arguments to update or create a MatchLogs.
     * @example
     * // Update or create a MatchLogs
     * const matchLogs = await prisma.matchLogs.upsert({
     *   create: {
     *     // ... data to create a MatchLogs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchLogs we want to update
     *   }
     * })
     */
    upsert<T extends MatchLogsUpsertArgs>(args: SelectSubset<T, MatchLogsUpsertArgs<ExtArgs>>): Prisma__MatchLogsClient<$Result.GetResult<Prisma.$MatchLogsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsCountArgs} args - Arguments to filter MatchLogs to count.
     * @example
     * // Count the number of MatchLogs
     * const count = await prisma.matchLogs.count({
     *   where: {
     *     // ... the filter for the MatchLogs we want to count
     *   }
     * })
    **/
    count<T extends MatchLogsCountArgs>(
      args?: Subset<T, MatchLogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchLogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchLogsAggregateArgs>(args: Subset<T, MatchLogsAggregateArgs>): Prisma.PrismaPromise<GetMatchLogsAggregateType<T>>

    /**
     * Group by MatchLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchLogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchLogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchLogsGroupByArgs['orderBy'] }
        : { orderBy?: MatchLogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchLogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchLogs model
   */
  readonly fields: MatchLogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchLogs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchLogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    EnemyUsers<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchLogs model
   */ 
  interface MatchLogsFieldRefs {
    readonly matchLogId: FieldRef<"MatchLogs", 'Int'>
    readonly userId: FieldRef<"MatchLogs", 'Int'>
    readonly enemyUserId: FieldRef<"MatchLogs", 'Int'>
    readonly isWin: FieldRef<"MatchLogs", 'Int'>
    readonly playedAt: FieldRef<"MatchLogs", 'DateTime'>
    readonly createdAt: FieldRef<"MatchLogs", 'DateTime'>
    readonly updatedAt: FieldRef<"MatchLogs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MatchLogs findUnique
   */
  export type MatchLogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where: MatchLogsWhereUniqueInput
  }

  /**
   * MatchLogs findUniqueOrThrow
   */
  export type MatchLogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where: MatchLogsWhereUniqueInput
  }

  /**
   * MatchLogs findFirst
   */
  export type MatchLogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where?: MatchLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchLogs.
     */
    cursor?: MatchLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchLogs.
     */
    distinct?: MatchLogsScalarFieldEnum | MatchLogsScalarFieldEnum[]
  }

  /**
   * MatchLogs findFirstOrThrow
   */
  export type MatchLogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where?: MatchLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchLogs.
     */
    cursor?: MatchLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchLogs.
     */
    distinct?: MatchLogsScalarFieldEnum | MatchLogsScalarFieldEnum[]
  }

  /**
   * MatchLogs findMany
   */
  export type MatchLogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter, which MatchLogs to fetch.
     */
    where?: MatchLogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchLogs to fetch.
     */
    orderBy?: MatchLogsOrderByWithRelationInput | MatchLogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchLogs.
     */
    cursor?: MatchLogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchLogs.
     */
    skip?: number
    distinct?: MatchLogsScalarFieldEnum | MatchLogsScalarFieldEnum[]
  }

  /**
   * MatchLogs create
   */
  export type MatchLogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchLogs.
     */
    data: XOR<MatchLogsCreateInput, MatchLogsUncheckedCreateInput>
  }

  /**
   * MatchLogs createMany
   */
  export type MatchLogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchLogs.
     */
    data: MatchLogsCreateManyInput | MatchLogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MatchLogs update
   */
  export type MatchLogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchLogs.
     */
    data: XOR<MatchLogsUpdateInput, MatchLogsUncheckedUpdateInput>
    /**
     * Choose, which MatchLogs to update.
     */
    where: MatchLogsWhereUniqueInput
  }

  /**
   * MatchLogs updateMany
   */
  export type MatchLogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchLogs.
     */
    data: XOR<MatchLogsUpdateManyMutationInput, MatchLogsUncheckedUpdateManyInput>
    /**
     * Filter which MatchLogs to update
     */
    where?: MatchLogsWhereInput
  }

  /**
   * MatchLogs upsert
   */
  export type MatchLogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchLogs to update in case it exists.
     */
    where: MatchLogsWhereUniqueInput
    /**
     * In case the MatchLogs found by the `where` argument doesn't exist, create a new MatchLogs with this data.
     */
    create: XOR<MatchLogsCreateInput, MatchLogsUncheckedCreateInput>
    /**
     * In case the MatchLogs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchLogsUpdateInput, MatchLogsUncheckedUpdateInput>
  }

  /**
   * MatchLogs delete
   */
  export type MatchLogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
    /**
     * Filter which MatchLogs to delete.
     */
    where: MatchLogsWhereUniqueInput
  }

  /**
   * MatchLogs deleteMany
   */
  export type MatchLogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchLogs to delete
     */
    where?: MatchLogsWhereInput
  }

  /**
   * MatchLogs without action
   */
  export type MatchLogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchLogs
     */
    select?: MatchLogsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchLogsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    userId: 'userId',
    name: 'name',
    password: 'password',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const UserPlayersScalarFieldEnum: {
    userPlayerId: 'userPlayerId',
    userId: 'userId',
    playerId: 'playerId',
    count: 'count',
    upgrade: 'upgrade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserPlayersScalarFieldEnum = (typeof UserPlayersScalarFieldEnum)[keyof typeof UserPlayersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    teamId: 'teamId',
    userId: 'userId',
    userPlayerId1: 'userPlayerId1',
    userPlayerId2: 'userPlayerId2',
    userPlayerId3: 'userPlayerId3',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const CachesScalarFieldEnum: {
    cacheId: 'cacheId',
    userId: 'userId',
    cacheChange: 'cacheChange',
    cacheSource: 'cacheSource',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CachesScalarFieldEnum = (typeof CachesScalarFieldEnum)[keyof typeof CachesScalarFieldEnum]


  export const MatchLogsScalarFieldEnum: {
    matchLogId: 'matchLogId',
    userId: 'userId',
    enemyUserId: 'enemyUserId',
    isWin: 'isWin',
    playedAt: 'playedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MatchLogsScalarFieldEnum = (typeof MatchLogsScalarFieldEnum)[keyof typeof MatchLogsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userId?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    rating?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    userPlayers?: UserPlayersListRelationFilter
    teams?: TeamsListRelationFilter
    Caches?: CachesListRelationFilter
    Users?: MatchLogsListRelationFilter
    EnemyUsers?: MatchLogsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    userId?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userPlayers?: UserPlayersOrderByRelationAggregateInput
    teams?: TeamsOrderByRelationAggregateInput
    Caches?: CachesOrderByRelationAggregateInput
    Users?: MatchLogsOrderByRelationAggregateInput
    EnemyUsers?: MatchLogsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    name?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    password?: StringFilter<"Users"> | string
    rating?: IntFilter<"Users"> | number
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    userPlayers?: UserPlayersListRelationFilter
    teams?: TeamsListRelationFilter
    Caches?: CachesListRelationFilter
    Users?: MatchLogsListRelationFilter
    EnemyUsers?: MatchLogsListRelationFilter
  }, "userId" | "name">

  export type UsersOrderByWithAggregationInput = {
    userId?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    rating?: IntWithAggregatesFilter<"Users"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type UserPlayersWhereInput = {
    AND?: UserPlayersWhereInput | UserPlayersWhereInput[]
    OR?: UserPlayersWhereInput[]
    NOT?: UserPlayersWhereInput | UserPlayersWhereInput[]
    userPlayerId?: IntFilter<"UserPlayers"> | number
    userId?: IntFilter<"UserPlayers"> | number
    playerId?: IntFilter<"UserPlayers"> | number
    count?: IntFilter<"UserPlayers"> | number
    upgrade?: IntFilter<"UserPlayers"> | number
    createdAt?: DateTimeFilter<"UserPlayers"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlayers"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    UserPlayer1?: TeamsListRelationFilter
    UserPlayer2?: TeamsListRelationFilter
    UserPlayer3?: TeamsListRelationFilter
  }

  export type UserPlayersOrderByWithRelationInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
    UserPlayer1?: TeamsOrderByRelationAggregateInput
    UserPlayer2?: TeamsOrderByRelationAggregateInput
    UserPlayer3?: TeamsOrderByRelationAggregateInput
  }

  export type UserPlayersWhereUniqueInput = Prisma.AtLeast<{
    userPlayerId?: number
    AND?: UserPlayersWhereInput | UserPlayersWhereInput[]
    OR?: UserPlayersWhereInput[]
    NOT?: UserPlayersWhereInput | UserPlayersWhereInput[]
    userId?: IntFilter<"UserPlayers"> | number
    playerId?: IntFilter<"UserPlayers"> | number
    count?: IntFilter<"UserPlayers"> | number
    upgrade?: IntFilter<"UserPlayers"> | number
    createdAt?: DateTimeFilter<"UserPlayers"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlayers"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    UserPlayer1?: TeamsListRelationFilter
    UserPlayer2?: TeamsListRelationFilter
    UserPlayer3?: TeamsListRelationFilter
  }, "userPlayerId">

  export type UserPlayersOrderByWithAggregationInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPlayersCountOrderByAggregateInput
    _avg?: UserPlayersAvgOrderByAggregateInput
    _max?: UserPlayersMaxOrderByAggregateInput
    _min?: UserPlayersMinOrderByAggregateInput
    _sum?: UserPlayersSumOrderByAggregateInput
  }

  export type UserPlayersScalarWhereWithAggregatesInput = {
    AND?: UserPlayersScalarWhereWithAggregatesInput | UserPlayersScalarWhereWithAggregatesInput[]
    OR?: UserPlayersScalarWhereWithAggregatesInput[]
    NOT?: UserPlayersScalarWhereWithAggregatesInput | UserPlayersScalarWhereWithAggregatesInput[]
    userPlayerId?: IntWithAggregatesFilter<"UserPlayers"> | number
    userId?: IntWithAggregatesFilter<"UserPlayers"> | number
    playerId?: IntWithAggregatesFilter<"UserPlayers"> | number
    count?: IntWithAggregatesFilter<"UserPlayers"> | number
    upgrade?: IntWithAggregatesFilter<"UserPlayers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserPlayers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserPlayers"> | Date | string
  }

  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    teamId?: IntFilter<"Teams"> | number
    userId?: IntFilter<"Teams"> | number
    userPlayerId1?: IntFilter<"Teams"> | number
    userPlayerId2?: IntFilter<"Teams"> | number
    userPlayerId3?: IntFilter<"Teams"> | number
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    UserPlayer1?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
    UserPlayer2?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
    UserPlayer3?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
  }

  export type TeamsOrderByWithRelationInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
    UserPlayer1?: UserPlayersOrderByWithRelationInput
    UserPlayer2?: UserPlayersOrderByWithRelationInput
    UserPlayer3?: UserPlayersOrderByWithRelationInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    teamId?: number
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    userId?: IntFilter<"Teams"> | number
    userPlayerId1?: IntFilter<"Teams"> | number
    userPlayerId2?: IntFilter<"Teams"> | number
    userPlayerId3?: IntFilter<"Teams"> | number
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
    UserPlayer1?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
    UserPlayer2?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
    UserPlayer3?: XOR<UserPlayersRelationFilter, UserPlayersWhereInput>
  }, "teamId">

  export type TeamsOrderByWithAggregationInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _avg?: TeamsAvgOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
    _sum?: TeamsSumOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    teamId?: IntWithAggregatesFilter<"Teams"> | number
    userId?: IntWithAggregatesFilter<"Teams"> | number
    userPlayerId1?: IntWithAggregatesFilter<"Teams"> | number
    userPlayerId2?: IntWithAggregatesFilter<"Teams"> | number
    userPlayerId3?: IntWithAggregatesFilter<"Teams"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
  }

  export type CachesWhereInput = {
    AND?: CachesWhereInput | CachesWhereInput[]
    OR?: CachesWhereInput[]
    NOT?: CachesWhereInput | CachesWhereInput[]
    cacheId?: IntFilter<"Caches"> | number
    userId?: IntFilter<"Caches"> | number
    cacheChange?: IntFilter<"Caches"> | number
    cacheSource?: IntFilter<"Caches"> | number
    createdAt?: DateTimeFilter<"Caches"> | Date | string
    updatedAt?: DateTimeFilter<"Caches"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type CachesOrderByWithRelationInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UsersOrderByWithRelationInput
  }

  export type CachesWhereUniqueInput = Prisma.AtLeast<{
    cacheId?: number
    AND?: CachesWhereInput | CachesWhereInput[]
    OR?: CachesWhereInput[]
    NOT?: CachesWhereInput | CachesWhereInput[]
    userId?: IntFilter<"Caches"> | number
    cacheChange?: IntFilter<"Caches"> | number
    cacheSource?: IntFilter<"Caches"> | number
    createdAt?: DateTimeFilter<"Caches"> | Date | string
    updatedAt?: DateTimeFilter<"Caches"> | Date | string
    users?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "cacheId">

  export type CachesOrderByWithAggregationInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CachesCountOrderByAggregateInput
    _avg?: CachesAvgOrderByAggregateInput
    _max?: CachesMaxOrderByAggregateInput
    _min?: CachesMinOrderByAggregateInput
    _sum?: CachesSumOrderByAggregateInput
  }

  export type CachesScalarWhereWithAggregatesInput = {
    AND?: CachesScalarWhereWithAggregatesInput | CachesScalarWhereWithAggregatesInput[]
    OR?: CachesScalarWhereWithAggregatesInput[]
    NOT?: CachesScalarWhereWithAggregatesInput | CachesScalarWhereWithAggregatesInput[]
    cacheId?: IntWithAggregatesFilter<"Caches"> | number
    userId?: IntWithAggregatesFilter<"Caches"> | number
    cacheChange?: IntWithAggregatesFilter<"Caches"> | number
    cacheSource?: IntWithAggregatesFilter<"Caches"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Caches"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Caches"> | Date | string
  }

  export type MatchLogsWhereInput = {
    AND?: MatchLogsWhereInput | MatchLogsWhereInput[]
    OR?: MatchLogsWhereInput[]
    NOT?: MatchLogsWhereInput | MatchLogsWhereInput[]
    matchLogId?: IntFilter<"MatchLogs"> | number
    userId?: IntFilter<"MatchLogs"> | number
    enemyUserId?: IntFilter<"MatchLogs"> | number
    isWin?: IntFilter<"MatchLogs"> | number
    playedAt?: DateTimeFilter<"MatchLogs"> | Date | string
    createdAt?: DateTimeFilter<"MatchLogs"> | Date | string
    updatedAt?: DateTimeFilter<"MatchLogs"> | Date | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    EnemyUsers?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type MatchLogsOrderByWithRelationInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Users?: UsersOrderByWithRelationInput
    EnemyUsers?: UsersOrderByWithRelationInput
  }

  export type MatchLogsWhereUniqueInput = Prisma.AtLeast<{
    matchLogId?: number
    AND?: MatchLogsWhereInput | MatchLogsWhereInput[]
    OR?: MatchLogsWhereInput[]
    NOT?: MatchLogsWhereInput | MatchLogsWhereInput[]
    userId?: IntFilter<"MatchLogs"> | number
    enemyUserId?: IntFilter<"MatchLogs"> | number
    isWin?: IntFilter<"MatchLogs"> | number
    playedAt?: DateTimeFilter<"MatchLogs"> | Date | string
    createdAt?: DateTimeFilter<"MatchLogs"> | Date | string
    updatedAt?: DateTimeFilter<"MatchLogs"> | Date | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput>
    EnemyUsers?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "matchLogId">

  export type MatchLogsOrderByWithAggregationInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MatchLogsCountOrderByAggregateInput
    _avg?: MatchLogsAvgOrderByAggregateInput
    _max?: MatchLogsMaxOrderByAggregateInput
    _min?: MatchLogsMinOrderByAggregateInput
    _sum?: MatchLogsSumOrderByAggregateInput
  }

  export type MatchLogsScalarWhereWithAggregatesInput = {
    AND?: MatchLogsScalarWhereWithAggregatesInput | MatchLogsScalarWhereWithAggregatesInput[]
    OR?: MatchLogsScalarWhereWithAggregatesInput[]
    NOT?: MatchLogsScalarWhereWithAggregatesInput | MatchLogsScalarWhereWithAggregatesInput[]
    matchLogId?: IntWithAggregatesFilter<"MatchLogs"> | number
    userId?: IntWithAggregatesFilter<"MatchLogs"> | number
    enemyUserId?: IntWithAggregatesFilter<"MatchLogs"> | number
    isWin?: IntWithAggregatesFilter<"MatchLogs"> | number
    playedAt?: DateTimeWithAggregatesFilter<"MatchLogs"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"MatchLogs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MatchLogs"> | Date | string
  }

  export type UsersCreateInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersCreateNestedManyWithoutUsersInput
    teams?: TeamsCreateNestedManyWithoutUsersInput
    Caches?: CachesCreateNestedManyWithoutUsersInput
    Users?: MatchLogsCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUncheckedCreateInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersUncheckedCreateNestedManyWithoutUsersInput
    teams?: TeamsUncheckedCreateNestedManyWithoutUsersInput
    Caches?: CachesUncheckedCreateNestedManyWithoutUsersInput
    Users?: MatchLogsUncheckedCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUpdateManyWithoutUsersNestedInput
    teams?: TeamsUpdateManyWithoutUsersNestedInput
    Caches?: CachesUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutUsersNestedInput
    Caches?: CachesUncheckedUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUncheckedUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersCreateManyInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlayersCreateInput = {
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutUserPlayersInput
    UserPlayer1?: TeamsCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersUncheckedCreateInput = {
    userPlayerId?: number
    userId: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1?: TeamsUncheckedCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsUncheckedCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsUncheckedCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersUpdateInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutUserPlayersNestedInput
    UserPlayer1?: TeamsUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUncheckedUpdateInput = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: TeamsUncheckedUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUncheckedUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUncheckedUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersCreateManyInput = {
    userPlayerId?: number
    userId: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlayersUpdateManyMutationInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPlayersUncheckedUpdateManyInput = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutTeamsInput
    UserPlayer1: UserPlayersCreateNestedOneWithoutUserPlayer1Input
    UserPlayer2: UserPlayersCreateNestedOneWithoutUserPlayer2Input
    UserPlayer3: UserPlayersCreateNestedOneWithoutUserPlayer3Input
  }

  export type TeamsUncheckedCreateInput = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutTeamsNestedInput
    UserPlayer1?: UserPlayersUpdateOneRequiredWithoutUserPlayer1NestedInput
    UserPlayer2?: UserPlayersUpdateOneRequiredWithoutUserPlayer2NestedInput
    UserPlayer3?: UserPlayersUpdateOneRequiredWithoutUserPlayer3NestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateManyInput = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesCreateInput = {
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutCachesInput
  }

  export type CachesUncheckedCreateInput = {
    cacheId?: number
    userId: number
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CachesUpdateInput = {
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutCachesNestedInput
  }

  export type CachesUncheckedUpdateInput = {
    cacheId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesCreateManyInput = {
    cacheId?: number
    userId: number
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CachesUpdateManyMutationInput = {
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesUncheckedUpdateManyInput = {
    cacheId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsCreateInput = {
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutUsersInput
    EnemyUsers: UsersCreateNestedOneWithoutEnemyUsersInput
  }

  export type MatchLogsUncheckedCreateInput = {
    matchLogId?: number
    userId: number
    enemyUserId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsUpdateInput = {
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutUsersNestedInput
    EnemyUsers?: UsersUpdateOneRequiredWithoutEnemyUsersNestedInput
  }

  export type MatchLogsUncheckedUpdateInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enemyUserId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsCreateManyInput = {
    matchLogId?: number
    userId: number
    enemyUserId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsUpdateManyMutationInput = {
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsUncheckedUpdateManyInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    enemyUserId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserPlayersListRelationFilter = {
    every?: UserPlayersWhereInput
    some?: UserPlayersWhereInput
    none?: UserPlayersWhereInput
  }

  export type TeamsListRelationFilter = {
    every?: TeamsWhereInput
    some?: TeamsWhereInput
    none?: TeamsWhereInput
  }

  export type CachesListRelationFilter = {
    every?: CachesWhereInput
    some?: CachesWhereInput
    none?: CachesWhereInput
  }

  export type MatchLogsListRelationFilter = {
    every?: MatchLogsWhereInput
    some?: MatchLogsWhereInput
    none?: MatchLogsWhereInput
  }

  export type UserPlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CachesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchLogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    userId?: SortOrder
    rating?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    userId?: SortOrder
    name?: SortOrder
    password?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    userId?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UserPlayersCountOrderByAggregateInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlayersAvgOrderByAggregateInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
  }

  export type UserPlayersMaxOrderByAggregateInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlayersMinOrderByAggregateInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPlayersSumOrderByAggregateInput = {
    userPlayerId?: SortOrder
    userId?: SortOrder
    playerId?: SortOrder
    count?: SortOrder
    upgrade?: SortOrder
  }

  export type UserPlayersRelationFilter = {
    is?: UserPlayersWhereInput
    isNot?: UserPlayersWhereInput
  }

  export type TeamsCountOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsAvgOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsSumOrderByAggregateInput = {
    teamId?: SortOrder
    userId?: SortOrder
    userPlayerId1?: SortOrder
    userPlayerId2?: SortOrder
    userPlayerId3?: SortOrder
  }

  export type CachesCountOrderByAggregateInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CachesAvgOrderByAggregateInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
  }

  export type CachesMaxOrderByAggregateInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CachesMinOrderByAggregateInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CachesSumOrderByAggregateInput = {
    cacheId?: SortOrder
    userId?: SortOrder
    cacheChange?: SortOrder
    cacheSource?: SortOrder
  }

  export type MatchLogsCountOrderByAggregateInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchLogsAvgOrderByAggregateInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
  }

  export type MatchLogsMaxOrderByAggregateInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchLogsMinOrderByAggregateInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
    playedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MatchLogsSumOrderByAggregateInput = {
    matchLogId?: SortOrder
    userId?: SortOrder
    enemyUserId?: SortOrder
    isWin?: SortOrder
  }

  export type UserPlayersCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput> | UserPlayersCreateWithoutUsersInput[] | UserPlayersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUsersInput | UserPlayersCreateOrConnectWithoutUsersInput[]
    createMany?: UserPlayersCreateManyUsersInputEnvelope
    connect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
  }

  export type TeamsCreateNestedManyWithoutUsersInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput> | TeamsCreateWithoutUsersInput[] | TeamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput | TeamsCreateOrConnectWithoutUsersInput[]
    createMany?: TeamsCreateManyUsersInputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type CachesCreateNestedManyWithoutUsersInput = {
    create?: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput> | CachesCreateWithoutUsersInput[] | CachesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CachesCreateOrConnectWithoutUsersInput | CachesCreateOrConnectWithoutUsersInput[]
    createMany?: CachesCreateManyUsersInputEnvelope
    connect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
  }

  export type MatchLogsCreateNestedManyWithoutUsersInput = {
    create?: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput> | MatchLogsCreateWithoutUsersInput[] | MatchLogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutUsersInput | MatchLogsCreateOrConnectWithoutUsersInput[]
    createMany?: MatchLogsCreateManyUsersInputEnvelope
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
  }

  export type MatchLogsCreateNestedManyWithoutEnemyUsersInput = {
    create?: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput> | MatchLogsCreateWithoutEnemyUsersInput[] | MatchLogsUncheckedCreateWithoutEnemyUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutEnemyUsersInput | MatchLogsCreateOrConnectWithoutEnemyUsersInput[]
    createMany?: MatchLogsCreateManyEnemyUsersInputEnvelope
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
  }

  export type UserPlayersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput> | UserPlayersCreateWithoutUsersInput[] | UserPlayersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUsersInput | UserPlayersCreateOrConnectWithoutUsersInput[]
    createMany?: UserPlayersCreateManyUsersInputEnvelope
    connect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput> | TeamsCreateWithoutUsersInput[] | TeamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput | TeamsCreateOrConnectWithoutUsersInput[]
    createMany?: TeamsCreateManyUsersInputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type CachesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput> | CachesCreateWithoutUsersInput[] | CachesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CachesCreateOrConnectWithoutUsersInput | CachesCreateOrConnectWithoutUsersInput[]
    createMany?: CachesCreateManyUsersInputEnvelope
    connect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
  }

  export type MatchLogsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput> | MatchLogsCreateWithoutUsersInput[] | MatchLogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutUsersInput | MatchLogsCreateOrConnectWithoutUsersInput[]
    createMany?: MatchLogsCreateManyUsersInputEnvelope
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
  }

  export type MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput = {
    create?: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput> | MatchLogsCreateWithoutEnemyUsersInput[] | MatchLogsUncheckedCreateWithoutEnemyUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutEnemyUsersInput | MatchLogsCreateOrConnectWithoutEnemyUsersInput[]
    createMany?: MatchLogsCreateManyEnemyUsersInputEnvelope
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserPlayersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput> | UserPlayersCreateWithoutUsersInput[] | UserPlayersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUsersInput | UserPlayersCreateOrConnectWithoutUsersInput[]
    upsert?: UserPlayersUpsertWithWhereUniqueWithoutUsersInput | UserPlayersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserPlayersCreateManyUsersInputEnvelope
    set?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    disconnect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    delete?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    connect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    update?: UserPlayersUpdateWithWhereUniqueWithoutUsersInput | UserPlayersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserPlayersUpdateManyWithWhereWithoutUsersInput | UserPlayersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserPlayersScalarWhereInput | UserPlayersScalarWhereInput[]
  }

  export type TeamsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput> | TeamsCreateWithoutUsersInput[] | TeamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput | TeamsCreateOrConnectWithoutUsersInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUsersInput | TeamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TeamsCreateManyUsersInputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUsersInput | TeamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUsersInput | TeamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type CachesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput> | CachesCreateWithoutUsersInput[] | CachesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CachesCreateOrConnectWithoutUsersInput | CachesCreateOrConnectWithoutUsersInput[]
    upsert?: CachesUpsertWithWhereUniqueWithoutUsersInput | CachesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CachesCreateManyUsersInputEnvelope
    set?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    disconnect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    delete?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    connect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    update?: CachesUpdateWithWhereUniqueWithoutUsersInput | CachesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CachesUpdateManyWithWhereWithoutUsersInput | CachesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CachesScalarWhereInput | CachesScalarWhereInput[]
  }

  export type MatchLogsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput> | MatchLogsCreateWithoutUsersInput[] | MatchLogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutUsersInput | MatchLogsCreateOrConnectWithoutUsersInput[]
    upsert?: MatchLogsUpsertWithWhereUniqueWithoutUsersInput | MatchLogsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MatchLogsCreateManyUsersInputEnvelope
    set?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    disconnect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    delete?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    update?: MatchLogsUpdateWithWhereUniqueWithoutUsersInput | MatchLogsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MatchLogsUpdateManyWithWhereWithoutUsersInput | MatchLogsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
  }

  export type MatchLogsUpdateManyWithoutEnemyUsersNestedInput = {
    create?: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput> | MatchLogsCreateWithoutEnemyUsersInput[] | MatchLogsUncheckedCreateWithoutEnemyUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutEnemyUsersInput | MatchLogsCreateOrConnectWithoutEnemyUsersInput[]
    upsert?: MatchLogsUpsertWithWhereUniqueWithoutEnemyUsersInput | MatchLogsUpsertWithWhereUniqueWithoutEnemyUsersInput[]
    createMany?: MatchLogsCreateManyEnemyUsersInputEnvelope
    set?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    disconnect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    delete?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    update?: MatchLogsUpdateWithWhereUniqueWithoutEnemyUsersInput | MatchLogsUpdateWithWhereUniqueWithoutEnemyUsersInput[]
    updateMany?: MatchLogsUpdateManyWithWhereWithoutEnemyUsersInput | MatchLogsUpdateManyWithWhereWithoutEnemyUsersInput[]
    deleteMany?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
  }

  export type UserPlayersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput> | UserPlayersCreateWithoutUsersInput[] | UserPlayersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUsersInput | UserPlayersCreateOrConnectWithoutUsersInput[]
    upsert?: UserPlayersUpsertWithWhereUniqueWithoutUsersInput | UserPlayersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: UserPlayersCreateManyUsersInputEnvelope
    set?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    disconnect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    delete?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    connect?: UserPlayersWhereUniqueInput | UserPlayersWhereUniqueInput[]
    update?: UserPlayersUpdateWithWhereUniqueWithoutUsersInput | UserPlayersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: UserPlayersUpdateManyWithWhereWithoutUsersInput | UserPlayersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: UserPlayersScalarWhereInput | UserPlayersScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput> | TeamsCreateWithoutUsersInput[] | TeamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUsersInput | TeamsCreateOrConnectWithoutUsersInput[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUsersInput | TeamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TeamsCreateManyUsersInputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUsersInput | TeamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUsersInput | TeamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type CachesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput> | CachesCreateWithoutUsersInput[] | CachesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CachesCreateOrConnectWithoutUsersInput | CachesCreateOrConnectWithoutUsersInput[]
    upsert?: CachesUpsertWithWhereUniqueWithoutUsersInput | CachesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CachesCreateManyUsersInputEnvelope
    set?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    disconnect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    delete?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    connect?: CachesWhereUniqueInput | CachesWhereUniqueInput[]
    update?: CachesUpdateWithWhereUniqueWithoutUsersInput | CachesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CachesUpdateManyWithWhereWithoutUsersInput | CachesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CachesScalarWhereInput | CachesScalarWhereInput[]
  }

  export type MatchLogsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput> | MatchLogsCreateWithoutUsersInput[] | MatchLogsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutUsersInput | MatchLogsCreateOrConnectWithoutUsersInput[]
    upsert?: MatchLogsUpsertWithWhereUniqueWithoutUsersInput | MatchLogsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: MatchLogsCreateManyUsersInputEnvelope
    set?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    disconnect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    delete?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    update?: MatchLogsUpdateWithWhereUniqueWithoutUsersInput | MatchLogsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: MatchLogsUpdateManyWithWhereWithoutUsersInput | MatchLogsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
  }

  export type MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput = {
    create?: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput> | MatchLogsCreateWithoutEnemyUsersInput[] | MatchLogsUncheckedCreateWithoutEnemyUsersInput[]
    connectOrCreate?: MatchLogsCreateOrConnectWithoutEnemyUsersInput | MatchLogsCreateOrConnectWithoutEnemyUsersInput[]
    upsert?: MatchLogsUpsertWithWhereUniqueWithoutEnemyUsersInput | MatchLogsUpsertWithWhereUniqueWithoutEnemyUsersInput[]
    createMany?: MatchLogsCreateManyEnemyUsersInputEnvelope
    set?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    disconnect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    delete?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    connect?: MatchLogsWhereUniqueInput | MatchLogsWhereUniqueInput[]
    update?: MatchLogsUpdateWithWhereUniqueWithoutEnemyUsersInput | MatchLogsUpdateWithWhereUniqueWithoutEnemyUsersInput[]
    updateMany?: MatchLogsUpdateManyWithWhereWithoutEnemyUsersInput | MatchLogsUpdateManyWithWhereWithoutEnemyUsersInput[]
    deleteMany?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutUserPlayersInput = {
    create?: XOR<UsersCreateWithoutUserPlayersInput, UsersUncheckedCreateWithoutUserPlayersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserPlayersInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamsCreateNestedManyWithoutUserPlayer1Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input> | TeamsCreateWithoutUserPlayer1Input[] | TeamsUncheckedCreateWithoutUserPlayer1Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer1Input | TeamsCreateOrConnectWithoutUserPlayer1Input[]
    createMany?: TeamsCreateManyUserPlayer1InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsCreateNestedManyWithoutUserPlayer2Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input> | TeamsCreateWithoutUserPlayer2Input[] | TeamsUncheckedCreateWithoutUserPlayer2Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer2Input | TeamsCreateOrConnectWithoutUserPlayer2Input[]
    createMany?: TeamsCreateManyUserPlayer2InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsCreateNestedManyWithoutUserPlayer3Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input> | TeamsCreateWithoutUserPlayer3Input[] | TeamsUncheckedCreateWithoutUserPlayer3Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer3Input | TeamsCreateOrConnectWithoutUserPlayer3Input[]
    createMany?: TeamsCreateManyUserPlayer3InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutUserPlayer1Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input> | TeamsCreateWithoutUserPlayer1Input[] | TeamsUncheckedCreateWithoutUserPlayer1Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer1Input | TeamsCreateOrConnectWithoutUserPlayer1Input[]
    createMany?: TeamsCreateManyUserPlayer1InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutUserPlayer2Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input> | TeamsCreateWithoutUserPlayer2Input[] | TeamsUncheckedCreateWithoutUserPlayer2Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer2Input | TeamsCreateOrConnectWithoutUserPlayer2Input[]
    createMany?: TeamsCreateManyUserPlayer2InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type TeamsUncheckedCreateNestedManyWithoutUserPlayer3Input = {
    create?: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input> | TeamsCreateWithoutUserPlayer3Input[] | TeamsUncheckedCreateWithoutUserPlayer3Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer3Input | TeamsCreateOrConnectWithoutUserPlayer3Input[]
    createMany?: TeamsCreateManyUserPlayer3InputEnvelope
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutUserPlayersNestedInput = {
    create?: XOR<UsersCreateWithoutUserPlayersInput, UsersUncheckedCreateWithoutUserPlayersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUserPlayersInput
    upsert?: UsersUpsertWithoutUserPlayersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUserPlayersInput, UsersUpdateWithoutUserPlayersInput>, UsersUncheckedUpdateWithoutUserPlayersInput>
  }

  export type TeamsUpdateManyWithoutUserPlayer1NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input> | TeamsCreateWithoutUserPlayer1Input[] | TeamsUncheckedCreateWithoutUserPlayer1Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer1Input | TeamsCreateOrConnectWithoutUserPlayer1Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer1Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer1Input[]
    createMany?: TeamsCreateManyUserPlayer1InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer1Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer1Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer1Input | TeamsUpdateManyWithWhereWithoutUserPlayer1Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUpdateManyWithoutUserPlayer2NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input> | TeamsCreateWithoutUserPlayer2Input[] | TeamsUncheckedCreateWithoutUserPlayer2Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer2Input | TeamsCreateOrConnectWithoutUserPlayer2Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer2Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer2Input[]
    createMany?: TeamsCreateManyUserPlayer2InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer2Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer2Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer2Input | TeamsUpdateManyWithWhereWithoutUserPlayer2Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUpdateManyWithoutUserPlayer3NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input> | TeamsCreateWithoutUserPlayer3Input[] | TeamsUncheckedCreateWithoutUserPlayer3Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer3Input | TeamsCreateOrConnectWithoutUserPlayer3Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer3Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer3Input[]
    createMany?: TeamsCreateManyUserPlayer3InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer3Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer3Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer3Input | TeamsUpdateManyWithWhereWithoutUserPlayer3Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer1NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input> | TeamsCreateWithoutUserPlayer1Input[] | TeamsUncheckedCreateWithoutUserPlayer1Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer1Input | TeamsCreateOrConnectWithoutUserPlayer1Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer1Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer1Input[]
    createMany?: TeamsCreateManyUserPlayer1InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer1Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer1Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer1Input | TeamsUpdateManyWithWhereWithoutUserPlayer1Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer2NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input> | TeamsCreateWithoutUserPlayer2Input[] | TeamsUncheckedCreateWithoutUserPlayer2Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer2Input | TeamsCreateOrConnectWithoutUserPlayer2Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer2Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer2Input[]
    createMany?: TeamsCreateManyUserPlayer2InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer2Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer2Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer2Input | TeamsUpdateManyWithWhereWithoutUserPlayer2Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer3NestedInput = {
    create?: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input> | TeamsCreateWithoutUserPlayer3Input[] | TeamsUncheckedCreateWithoutUserPlayer3Input[]
    connectOrCreate?: TeamsCreateOrConnectWithoutUserPlayer3Input | TeamsCreateOrConnectWithoutUserPlayer3Input[]
    upsert?: TeamsUpsertWithWhereUniqueWithoutUserPlayer3Input | TeamsUpsertWithWhereUniqueWithoutUserPlayer3Input[]
    createMany?: TeamsCreateManyUserPlayer3InputEnvelope
    set?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    disconnect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    delete?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    connect?: TeamsWhereUniqueInput | TeamsWhereUniqueInput[]
    update?: TeamsUpdateWithWhereUniqueWithoutUserPlayer3Input | TeamsUpdateWithWhereUniqueWithoutUserPlayer3Input[]
    updateMany?: TeamsUpdateManyWithWhereWithoutUserPlayer3Input | TeamsUpdateManyWithWhereWithoutUserPlayer3Input[]
    deleteMany?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamsInput
    connect?: UsersWhereUniqueInput
  }

  export type UserPlayersCreateNestedOneWithoutUserPlayer1Input = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer1Input, UserPlayersUncheckedCreateWithoutUserPlayer1Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer1Input
    connect?: UserPlayersWhereUniqueInput
  }

  export type UserPlayersCreateNestedOneWithoutUserPlayer2Input = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer2Input, UserPlayersUncheckedCreateWithoutUserPlayer2Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer2Input
    connect?: UserPlayersWhereUniqueInput
  }

  export type UserPlayersCreateNestedOneWithoutUserPlayer3Input = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer3Input, UserPlayersUncheckedCreateWithoutUserPlayer3Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer3Input
    connect?: UserPlayersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamsInput
    upsert?: UsersUpsertWithoutTeamsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTeamsInput, UsersUpdateWithoutTeamsInput>, UsersUncheckedUpdateWithoutTeamsInput>
  }

  export type UserPlayersUpdateOneRequiredWithoutUserPlayer1NestedInput = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer1Input, UserPlayersUncheckedCreateWithoutUserPlayer1Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer1Input
    upsert?: UserPlayersUpsertWithoutUserPlayer1Input
    connect?: UserPlayersWhereUniqueInput
    update?: XOR<XOR<UserPlayersUpdateToOneWithWhereWithoutUserPlayer1Input, UserPlayersUpdateWithoutUserPlayer1Input>, UserPlayersUncheckedUpdateWithoutUserPlayer1Input>
  }

  export type UserPlayersUpdateOneRequiredWithoutUserPlayer2NestedInput = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer2Input, UserPlayersUncheckedCreateWithoutUserPlayer2Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer2Input
    upsert?: UserPlayersUpsertWithoutUserPlayer2Input
    connect?: UserPlayersWhereUniqueInput
    update?: XOR<XOR<UserPlayersUpdateToOneWithWhereWithoutUserPlayer2Input, UserPlayersUpdateWithoutUserPlayer2Input>, UserPlayersUncheckedUpdateWithoutUserPlayer2Input>
  }

  export type UserPlayersUpdateOneRequiredWithoutUserPlayer3NestedInput = {
    create?: XOR<UserPlayersCreateWithoutUserPlayer3Input, UserPlayersUncheckedCreateWithoutUserPlayer3Input>
    connectOrCreate?: UserPlayersCreateOrConnectWithoutUserPlayer3Input
    upsert?: UserPlayersUpsertWithoutUserPlayer3Input
    connect?: UserPlayersWhereUniqueInput
    update?: XOR<XOR<UserPlayersUpdateToOneWithWhereWithoutUserPlayer3Input, UserPlayersUpdateWithoutUserPlayer3Input>, UserPlayersUncheckedUpdateWithoutUserPlayer3Input>
  }

  export type UsersCreateNestedOneWithoutCachesInput = {
    create?: XOR<UsersCreateWithoutCachesInput, UsersUncheckedCreateWithoutCachesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCachesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCachesNestedInput = {
    create?: XOR<UsersCreateWithoutCachesInput, UsersUncheckedCreateWithoutCachesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCachesInput
    upsert?: UsersUpsertWithoutCachesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCachesInput, UsersUpdateWithoutCachesInput>, UsersUncheckedUpdateWithoutCachesInput>
  }

  export type UsersCreateNestedOneWithoutUsersInput = {
    create?: XOR<UsersCreateWithoutUsersInput, UsersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutEnemyUsersInput = {
    create?: XOR<UsersCreateWithoutEnemyUsersInput, UsersUncheckedCreateWithoutEnemyUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEnemyUsersInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<UsersCreateWithoutUsersInput, UsersUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutUsersInput
    upsert?: UsersUpsertWithoutUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutUsersInput, UsersUpdateWithoutUsersInput>, UsersUncheckedUpdateWithoutUsersInput>
  }

  export type UsersUpdateOneRequiredWithoutEnemyUsersNestedInput = {
    create?: XOR<UsersCreateWithoutEnemyUsersInput, UsersUncheckedCreateWithoutEnemyUsersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutEnemyUsersInput
    upsert?: UsersUpsertWithoutEnemyUsersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutEnemyUsersInput, UsersUpdateWithoutEnemyUsersInput>, UsersUncheckedUpdateWithoutEnemyUsersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserPlayersCreateWithoutUsersInput = {
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1?: TeamsCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersUncheckedCreateWithoutUsersInput = {
    userPlayerId?: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1?: TeamsUncheckedCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsUncheckedCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsUncheckedCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersCreateOrConnectWithoutUsersInput = {
    where: UserPlayersWhereUniqueInput
    create: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput>
  }

  export type UserPlayersCreateManyUsersInputEnvelope = {
    data: UserPlayersCreateManyUsersInput | UserPlayersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutUsersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1: UserPlayersCreateNestedOneWithoutUserPlayer1Input
    UserPlayer2: UserPlayersCreateNestedOneWithoutUserPlayer2Input
    UserPlayer3: UserPlayersCreateNestedOneWithoutUserPlayer3Input
  }

  export type TeamsUncheckedCreateWithoutUsersInput = {
    teamId?: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateOrConnectWithoutUsersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
  }

  export type TeamsCreateManyUsersInputEnvelope = {
    data: TeamsCreateManyUsersInput | TeamsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CachesCreateWithoutUsersInput = {
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CachesUncheckedCreateWithoutUsersInput = {
    cacheId?: number
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CachesCreateOrConnectWithoutUsersInput = {
    where: CachesWhereUniqueInput
    create: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput>
  }

  export type CachesCreateManyUsersInputEnvelope = {
    data: CachesCreateManyUsersInput | CachesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type MatchLogsCreateWithoutUsersInput = {
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    EnemyUsers: UsersCreateNestedOneWithoutEnemyUsersInput
  }

  export type MatchLogsUncheckedCreateWithoutUsersInput = {
    matchLogId?: number
    enemyUserId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsCreateOrConnectWithoutUsersInput = {
    where: MatchLogsWhereUniqueInput
    create: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput>
  }

  export type MatchLogsCreateManyUsersInputEnvelope = {
    data: MatchLogsCreateManyUsersInput | MatchLogsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type MatchLogsCreateWithoutEnemyUsersInput = {
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    Users: UsersCreateNestedOneWithoutUsersInput
  }

  export type MatchLogsUncheckedCreateWithoutEnemyUsersInput = {
    matchLogId?: number
    userId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsCreateOrConnectWithoutEnemyUsersInput = {
    where: MatchLogsWhereUniqueInput
    create: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput>
  }

  export type MatchLogsCreateManyEnemyUsersInputEnvelope = {
    data: MatchLogsCreateManyEnemyUsersInput | MatchLogsCreateManyEnemyUsersInput[]
    skipDuplicates?: boolean
  }

  export type UserPlayersUpsertWithWhereUniqueWithoutUsersInput = {
    where: UserPlayersWhereUniqueInput
    update: XOR<UserPlayersUpdateWithoutUsersInput, UserPlayersUncheckedUpdateWithoutUsersInput>
    create: XOR<UserPlayersCreateWithoutUsersInput, UserPlayersUncheckedCreateWithoutUsersInput>
  }

  export type UserPlayersUpdateWithWhereUniqueWithoutUsersInput = {
    where: UserPlayersWhereUniqueInput
    data: XOR<UserPlayersUpdateWithoutUsersInput, UserPlayersUncheckedUpdateWithoutUsersInput>
  }

  export type UserPlayersUpdateManyWithWhereWithoutUsersInput = {
    where: UserPlayersScalarWhereInput
    data: XOR<UserPlayersUpdateManyMutationInput, UserPlayersUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserPlayersScalarWhereInput = {
    AND?: UserPlayersScalarWhereInput | UserPlayersScalarWhereInput[]
    OR?: UserPlayersScalarWhereInput[]
    NOT?: UserPlayersScalarWhereInput | UserPlayersScalarWhereInput[]
    userPlayerId?: IntFilter<"UserPlayers"> | number
    userId?: IntFilter<"UserPlayers"> | number
    playerId?: IntFilter<"UserPlayers"> | number
    count?: IntFilter<"UserPlayers"> | number
    upgrade?: IntFilter<"UserPlayers"> | number
    createdAt?: DateTimeFilter<"UserPlayers"> | Date | string
    updatedAt?: DateTimeFilter<"UserPlayers"> | Date | string
  }

  export type TeamsUpsertWithWhereUniqueWithoutUsersInput = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutUsersInput, TeamsUncheckedUpdateWithoutUsersInput>
    create: XOR<TeamsCreateWithoutUsersInput, TeamsUncheckedCreateWithoutUsersInput>
  }

  export type TeamsUpdateWithWhereUniqueWithoutUsersInput = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutUsersInput, TeamsUncheckedUpdateWithoutUsersInput>
  }

  export type TeamsUpdateManyWithWhereWithoutUsersInput = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutUsersInput>
  }

  export type TeamsScalarWhereInput = {
    AND?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
    OR?: TeamsScalarWhereInput[]
    NOT?: TeamsScalarWhereInput | TeamsScalarWhereInput[]
    teamId?: IntFilter<"Teams"> | number
    userId?: IntFilter<"Teams"> | number
    userPlayerId1?: IntFilter<"Teams"> | number
    userPlayerId2?: IntFilter<"Teams"> | number
    userPlayerId3?: IntFilter<"Teams"> | number
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
  }

  export type CachesUpsertWithWhereUniqueWithoutUsersInput = {
    where: CachesWhereUniqueInput
    update: XOR<CachesUpdateWithoutUsersInput, CachesUncheckedUpdateWithoutUsersInput>
    create: XOR<CachesCreateWithoutUsersInput, CachesUncheckedCreateWithoutUsersInput>
  }

  export type CachesUpdateWithWhereUniqueWithoutUsersInput = {
    where: CachesWhereUniqueInput
    data: XOR<CachesUpdateWithoutUsersInput, CachesUncheckedUpdateWithoutUsersInput>
  }

  export type CachesUpdateManyWithWhereWithoutUsersInput = {
    where: CachesScalarWhereInput
    data: XOR<CachesUpdateManyMutationInput, CachesUncheckedUpdateManyWithoutUsersInput>
  }

  export type CachesScalarWhereInput = {
    AND?: CachesScalarWhereInput | CachesScalarWhereInput[]
    OR?: CachesScalarWhereInput[]
    NOT?: CachesScalarWhereInput | CachesScalarWhereInput[]
    cacheId?: IntFilter<"Caches"> | number
    userId?: IntFilter<"Caches"> | number
    cacheChange?: IntFilter<"Caches"> | number
    cacheSource?: IntFilter<"Caches"> | number
    createdAt?: DateTimeFilter<"Caches"> | Date | string
    updatedAt?: DateTimeFilter<"Caches"> | Date | string
  }

  export type MatchLogsUpsertWithWhereUniqueWithoutUsersInput = {
    where: MatchLogsWhereUniqueInput
    update: XOR<MatchLogsUpdateWithoutUsersInput, MatchLogsUncheckedUpdateWithoutUsersInput>
    create: XOR<MatchLogsCreateWithoutUsersInput, MatchLogsUncheckedCreateWithoutUsersInput>
  }

  export type MatchLogsUpdateWithWhereUniqueWithoutUsersInput = {
    where: MatchLogsWhereUniqueInput
    data: XOR<MatchLogsUpdateWithoutUsersInput, MatchLogsUncheckedUpdateWithoutUsersInput>
  }

  export type MatchLogsUpdateManyWithWhereWithoutUsersInput = {
    where: MatchLogsScalarWhereInput
    data: XOR<MatchLogsUpdateManyMutationInput, MatchLogsUncheckedUpdateManyWithoutUsersInput>
  }

  export type MatchLogsScalarWhereInput = {
    AND?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
    OR?: MatchLogsScalarWhereInput[]
    NOT?: MatchLogsScalarWhereInput | MatchLogsScalarWhereInput[]
    matchLogId?: IntFilter<"MatchLogs"> | number
    userId?: IntFilter<"MatchLogs"> | number
    enemyUserId?: IntFilter<"MatchLogs"> | number
    isWin?: IntFilter<"MatchLogs"> | number
    playedAt?: DateTimeFilter<"MatchLogs"> | Date | string
    createdAt?: DateTimeFilter<"MatchLogs"> | Date | string
    updatedAt?: DateTimeFilter<"MatchLogs"> | Date | string
  }

  export type MatchLogsUpsertWithWhereUniqueWithoutEnemyUsersInput = {
    where: MatchLogsWhereUniqueInput
    update: XOR<MatchLogsUpdateWithoutEnemyUsersInput, MatchLogsUncheckedUpdateWithoutEnemyUsersInput>
    create: XOR<MatchLogsCreateWithoutEnemyUsersInput, MatchLogsUncheckedCreateWithoutEnemyUsersInput>
  }

  export type MatchLogsUpdateWithWhereUniqueWithoutEnemyUsersInput = {
    where: MatchLogsWhereUniqueInput
    data: XOR<MatchLogsUpdateWithoutEnemyUsersInput, MatchLogsUncheckedUpdateWithoutEnemyUsersInput>
  }

  export type MatchLogsUpdateManyWithWhereWithoutEnemyUsersInput = {
    where: MatchLogsScalarWhereInput
    data: XOR<MatchLogsUpdateManyMutationInput, MatchLogsUncheckedUpdateManyWithoutEnemyUsersInput>
  }

  export type UsersCreateWithoutUserPlayersInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamsCreateNestedManyWithoutUsersInput
    Caches?: CachesCreateNestedManyWithoutUsersInput
    Users?: MatchLogsCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUncheckedCreateWithoutUserPlayersInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamsUncheckedCreateNestedManyWithoutUsersInput
    Caches?: CachesUncheckedCreateNestedManyWithoutUsersInput
    Users?: MatchLogsUncheckedCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersCreateOrConnectWithoutUserPlayersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUserPlayersInput, UsersUncheckedCreateWithoutUserPlayersInput>
  }

  export type TeamsCreateWithoutUserPlayer1Input = {
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutTeamsInput
    UserPlayer2: UserPlayersCreateNestedOneWithoutUserPlayer2Input
    UserPlayer3: UserPlayersCreateNestedOneWithoutUserPlayer3Input
  }

  export type TeamsUncheckedCreateWithoutUserPlayer1Input = {
    teamId?: number
    userId: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateOrConnectWithoutUserPlayer1Input = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input>
  }

  export type TeamsCreateManyUserPlayer1InputEnvelope = {
    data: TeamsCreateManyUserPlayer1Input | TeamsCreateManyUserPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutUserPlayer2Input = {
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutTeamsInput
    UserPlayer1: UserPlayersCreateNestedOneWithoutUserPlayer1Input
    UserPlayer3: UserPlayersCreateNestedOneWithoutUserPlayer3Input
  }

  export type TeamsUncheckedCreateWithoutUserPlayer2Input = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateOrConnectWithoutUserPlayer2Input = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input>
  }

  export type TeamsCreateManyUserPlayer2InputEnvelope = {
    data: TeamsCreateManyUserPlayer2Input | TeamsCreateManyUserPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type TeamsCreateWithoutUserPlayer3Input = {
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutTeamsInput
    UserPlayer1: UserPlayersCreateNestedOneWithoutUserPlayer1Input
    UserPlayer2: UserPlayersCreateNestedOneWithoutUserPlayer2Input
  }

  export type TeamsUncheckedCreateWithoutUserPlayer3Input = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateOrConnectWithoutUserPlayer3Input = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input>
  }

  export type TeamsCreateManyUserPlayer3InputEnvelope = {
    data: TeamsCreateManyUserPlayer3Input | TeamsCreateManyUserPlayer3Input[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutUserPlayersInput = {
    update: XOR<UsersUpdateWithoutUserPlayersInput, UsersUncheckedUpdateWithoutUserPlayersInput>
    create: XOR<UsersCreateWithoutUserPlayersInput, UsersUncheckedCreateWithoutUserPlayersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUserPlayersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUserPlayersInput, UsersUncheckedUpdateWithoutUserPlayersInput>
  }

  export type UsersUpdateWithoutUserPlayersInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsUpdateManyWithoutUsersNestedInput
    Caches?: CachesUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUserPlayersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamsUncheckedUpdateManyWithoutUsersNestedInput
    Caches?: CachesUncheckedUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUncheckedUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput
  }

  export type TeamsUpsertWithWhereUniqueWithoutUserPlayer1Input = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutUserPlayer1Input, TeamsUncheckedUpdateWithoutUserPlayer1Input>
    create: XOR<TeamsCreateWithoutUserPlayer1Input, TeamsUncheckedCreateWithoutUserPlayer1Input>
  }

  export type TeamsUpdateWithWhereUniqueWithoutUserPlayer1Input = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutUserPlayer1Input, TeamsUncheckedUpdateWithoutUserPlayer1Input>
  }

  export type TeamsUpdateManyWithWhereWithoutUserPlayer1Input = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutUserPlayer1Input>
  }

  export type TeamsUpsertWithWhereUniqueWithoutUserPlayer2Input = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutUserPlayer2Input, TeamsUncheckedUpdateWithoutUserPlayer2Input>
    create: XOR<TeamsCreateWithoutUserPlayer2Input, TeamsUncheckedCreateWithoutUserPlayer2Input>
  }

  export type TeamsUpdateWithWhereUniqueWithoutUserPlayer2Input = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutUserPlayer2Input, TeamsUncheckedUpdateWithoutUserPlayer2Input>
  }

  export type TeamsUpdateManyWithWhereWithoutUserPlayer2Input = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutUserPlayer2Input>
  }

  export type TeamsUpsertWithWhereUniqueWithoutUserPlayer3Input = {
    where: TeamsWhereUniqueInput
    update: XOR<TeamsUpdateWithoutUserPlayer3Input, TeamsUncheckedUpdateWithoutUserPlayer3Input>
    create: XOR<TeamsCreateWithoutUserPlayer3Input, TeamsUncheckedCreateWithoutUserPlayer3Input>
  }

  export type TeamsUpdateWithWhereUniqueWithoutUserPlayer3Input = {
    where: TeamsWhereUniqueInput
    data: XOR<TeamsUpdateWithoutUserPlayer3Input, TeamsUncheckedUpdateWithoutUserPlayer3Input>
  }

  export type TeamsUpdateManyWithWhereWithoutUserPlayer3Input = {
    where: TeamsScalarWhereInput
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyWithoutUserPlayer3Input>
  }

  export type UsersCreateWithoutTeamsInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersCreateNestedManyWithoutUsersInput
    Caches?: CachesCreateNestedManyWithoutUsersInput
    Users?: MatchLogsCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUncheckedCreateWithoutTeamsInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersUncheckedCreateNestedManyWithoutUsersInput
    Caches?: CachesUncheckedCreateNestedManyWithoutUsersInput
    Users?: MatchLogsUncheckedCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersCreateOrConnectWithoutTeamsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
  }

  export type UserPlayersCreateWithoutUserPlayer1Input = {
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutUserPlayersInput
    UserPlayer2?: TeamsCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersUncheckedCreateWithoutUserPlayer1Input = {
    userPlayerId?: number
    userId: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer2?: TeamsUncheckedCreateNestedManyWithoutUserPlayer2Input
    UserPlayer3?: TeamsUncheckedCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersCreateOrConnectWithoutUserPlayer1Input = {
    where: UserPlayersWhereUniqueInput
    create: XOR<UserPlayersCreateWithoutUserPlayer1Input, UserPlayersUncheckedCreateWithoutUserPlayer1Input>
  }

  export type UserPlayersCreateWithoutUserPlayer2Input = {
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutUserPlayersInput
    UserPlayer1?: TeamsCreateNestedManyWithoutUserPlayer1Input
    UserPlayer3?: TeamsCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersUncheckedCreateWithoutUserPlayer2Input = {
    userPlayerId?: number
    userId: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1?: TeamsUncheckedCreateNestedManyWithoutUserPlayer1Input
    UserPlayer3?: TeamsUncheckedCreateNestedManyWithoutUserPlayer3Input
  }

  export type UserPlayersCreateOrConnectWithoutUserPlayer2Input = {
    where: UserPlayersWhereUniqueInput
    create: XOR<UserPlayersCreateWithoutUserPlayer2Input, UserPlayersUncheckedCreateWithoutUserPlayer2Input>
  }

  export type UserPlayersCreateWithoutUserPlayer3Input = {
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    users: UsersCreateNestedOneWithoutUserPlayersInput
    UserPlayer1?: TeamsCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsCreateNestedManyWithoutUserPlayer2Input
  }

  export type UserPlayersUncheckedCreateWithoutUserPlayer3Input = {
    userPlayerId?: number
    userId: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    UserPlayer1?: TeamsUncheckedCreateNestedManyWithoutUserPlayer1Input
    UserPlayer2?: TeamsUncheckedCreateNestedManyWithoutUserPlayer2Input
  }

  export type UserPlayersCreateOrConnectWithoutUserPlayer3Input = {
    where: UserPlayersWhereUniqueInput
    create: XOR<UserPlayersCreateWithoutUserPlayer3Input, UserPlayersUncheckedCreateWithoutUserPlayer3Input>
  }

  export type UsersUpsertWithoutTeamsInput = {
    update: XOR<UsersUpdateWithoutTeamsInput, UsersUncheckedUpdateWithoutTeamsInput>
    create: XOR<UsersCreateWithoutTeamsInput, UsersUncheckedCreateWithoutTeamsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTeamsInput, UsersUncheckedUpdateWithoutTeamsInput>
  }

  export type UsersUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUpdateManyWithoutUsersNestedInput
    Caches?: CachesUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTeamsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUncheckedUpdateManyWithoutUsersNestedInput
    Caches?: CachesUncheckedUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUncheckedUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UserPlayersUpsertWithoutUserPlayer1Input = {
    update: XOR<UserPlayersUpdateWithoutUserPlayer1Input, UserPlayersUncheckedUpdateWithoutUserPlayer1Input>
    create: XOR<UserPlayersCreateWithoutUserPlayer1Input, UserPlayersUncheckedCreateWithoutUserPlayer1Input>
    where?: UserPlayersWhereInput
  }

  export type UserPlayersUpdateToOneWithWhereWithoutUserPlayer1Input = {
    where?: UserPlayersWhereInput
    data: XOR<UserPlayersUpdateWithoutUserPlayer1Input, UserPlayersUncheckedUpdateWithoutUserPlayer1Input>
  }

  export type UserPlayersUpdateWithoutUserPlayer1Input = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutUserPlayersNestedInput
    UserPlayer2?: TeamsUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUncheckedUpdateWithoutUserPlayer1Input = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer2?: TeamsUncheckedUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUncheckedUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUpsertWithoutUserPlayer2Input = {
    update: XOR<UserPlayersUpdateWithoutUserPlayer2Input, UserPlayersUncheckedUpdateWithoutUserPlayer2Input>
    create: XOR<UserPlayersCreateWithoutUserPlayer2Input, UserPlayersUncheckedCreateWithoutUserPlayer2Input>
    where?: UserPlayersWhereInput
  }

  export type UserPlayersUpdateToOneWithWhereWithoutUserPlayer2Input = {
    where?: UserPlayersWhereInput
    data: XOR<UserPlayersUpdateWithoutUserPlayer2Input, UserPlayersUncheckedUpdateWithoutUserPlayer2Input>
  }

  export type UserPlayersUpdateWithoutUserPlayer2Input = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutUserPlayersNestedInput
    UserPlayer1?: TeamsUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer3?: TeamsUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUncheckedUpdateWithoutUserPlayer2Input = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: TeamsUncheckedUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer3?: TeamsUncheckedUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUpsertWithoutUserPlayer3Input = {
    update: XOR<UserPlayersUpdateWithoutUserPlayer3Input, UserPlayersUncheckedUpdateWithoutUserPlayer3Input>
    create: XOR<UserPlayersCreateWithoutUserPlayer3Input, UserPlayersUncheckedCreateWithoutUserPlayer3Input>
    where?: UserPlayersWhereInput
  }

  export type UserPlayersUpdateToOneWithWhereWithoutUserPlayer3Input = {
    where?: UserPlayersWhereInput
    data: XOR<UserPlayersUpdateWithoutUserPlayer3Input, UserPlayersUncheckedUpdateWithoutUserPlayer3Input>
  }

  export type UserPlayersUpdateWithoutUserPlayer3Input = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutUserPlayersNestedInput
    UserPlayer1?: TeamsUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUpdateManyWithoutUserPlayer2NestedInput
  }

  export type UserPlayersUncheckedUpdateWithoutUserPlayer3Input = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: TeamsUncheckedUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUncheckedUpdateManyWithoutUserPlayer2NestedInput
  }

  export type UsersCreateWithoutCachesInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersCreateNestedManyWithoutUsersInput
    teams?: TeamsCreateNestedManyWithoutUsersInput
    Users?: MatchLogsCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUncheckedCreateWithoutCachesInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersUncheckedCreateNestedManyWithoutUsersInput
    teams?: TeamsUncheckedCreateNestedManyWithoutUsersInput
    Users?: MatchLogsUncheckedCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersCreateOrConnectWithoutCachesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCachesInput, UsersUncheckedCreateWithoutCachesInput>
  }

  export type UsersUpsertWithoutCachesInput = {
    update: XOR<UsersUpdateWithoutCachesInput, UsersUncheckedUpdateWithoutCachesInput>
    create: XOR<UsersCreateWithoutCachesInput, UsersUncheckedCreateWithoutCachesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCachesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCachesInput, UsersUncheckedUpdateWithoutCachesInput>
  }

  export type UsersUpdateWithoutCachesInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUpdateManyWithoutUsersNestedInput
    teams?: TeamsUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCachesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUncheckedUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersCreateWithoutUsersInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersCreateNestedManyWithoutUsersInput
    teams?: TeamsCreateNestedManyWithoutUsersInput
    Caches?: CachesCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersUncheckedCreateWithoutUsersInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersUncheckedCreateNestedManyWithoutUsersInput
    teams?: TeamsUncheckedCreateNestedManyWithoutUsersInput
    Caches?: CachesUncheckedCreateNestedManyWithoutUsersInput
    EnemyUsers?: MatchLogsUncheckedCreateNestedManyWithoutEnemyUsersInput
  }

  export type UsersCreateOrConnectWithoutUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutUsersInput, UsersUncheckedCreateWithoutUsersInput>
  }

  export type UsersCreateWithoutEnemyUsersInput = {
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersCreateNestedManyWithoutUsersInput
    teams?: TeamsCreateNestedManyWithoutUsersInput
    Caches?: CachesCreateNestedManyWithoutUsersInput
    Users?: MatchLogsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEnemyUsersInput = {
    userId?: number
    name: string
    password: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userPlayers?: UserPlayersUncheckedCreateNestedManyWithoutUsersInput
    teams?: TeamsUncheckedCreateNestedManyWithoutUsersInput
    Caches?: CachesUncheckedCreateNestedManyWithoutUsersInput
    Users?: MatchLogsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutEnemyUsersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEnemyUsersInput, UsersUncheckedCreateWithoutEnemyUsersInput>
  }

  export type UsersUpsertWithoutUsersInput = {
    update: XOR<UsersUpdateWithoutUsersInput, UsersUncheckedUpdateWithoutUsersInput>
    create: XOR<UsersCreateWithoutUsersInput, UsersUncheckedCreateWithoutUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutUsersInput, UsersUncheckedUpdateWithoutUsersInput>
  }

  export type UsersUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUpdateManyWithoutUsersNestedInput
    teams?: TeamsUpdateManyWithoutUsersNestedInput
    Caches?: CachesUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutUsersNestedInput
    Caches?: CachesUncheckedUpdateManyWithoutUsersNestedInput
    EnemyUsers?: MatchLogsUncheckedUpdateManyWithoutEnemyUsersNestedInput
  }

  export type UsersUpsertWithoutEnemyUsersInput = {
    update: XOR<UsersUpdateWithoutEnemyUsersInput, UsersUncheckedUpdateWithoutEnemyUsersInput>
    create: XOR<UsersCreateWithoutEnemyUsersInput, UsersUncheckedCreateWithoutEnemyUsersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutEnemyUsersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutEnemyUsersInput, UsersUncheckedUpdateWithoutEnemyUsersInput>
  }

  export type UsersUpdateWithoutEnemyUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUpdateManyWithoutUsersNestedInput
    teams?: TeamsUpdateManyWithoutUsersNestedInput
    Caches?: CachesUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEnemyUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPlayers?: UserPlayersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: TeamsUncheckedUpdateManyWithoutUsersNestedInput
    Caches?: CachesUncheckedUpdateManyWithoutUsersNestedInput
    Users?: MatchLogsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserPlayersCreateManyUsersInput = {
    userPlayerId?: number
    playerId: number
    count: number
    upgrade?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateManyUsersInput = {
    teamId?: number
    userPlayerId1: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CachesCreateManyUsersInput = {
    cacheId?: number
    cacheChange: number
    cacheSource: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsCreateManyUsersInput = {
    matchLogId?: number
    enemyUserId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MatchLogsCreateManyEnemyUsersInput = {
    matchLogId?: number
    userId: number
    isWin: number
    playedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserPlayersUpdateWithoutUsersInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: TeamsUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUncheckedUpdateWithoutUsersInput = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: TeamsUncheckedUpdateManyWithoutUserPlayer1NestedInput
    UserPlayer2?: TeamsUncheckedUpdateManyWithoutUserPlayer2NestedInput
    UserPlayer3?: TeamsUncheckedUpdateManyWithoutUserPlayer3NestedInput
  }

  export type UserPlayersUncheckedUpdateManyWithoutUsersInput = {
    userPlayerId?: IntFieldUpdateOperationsInput | number
    playerId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
    upgrade?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUpdateWithoutUsersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserPlayer1?: UserPlayersUpdateOneRequiredWithoutUserPlayer1NestedInput
    UserPlayer2?: UserPlayersUpdateOneRequiredWithoutUserPlayer2NestedInput
    UserPlayer3?: UserPlayersUpdateOneRequiredWithoutUserPlayer3NestedInput
  }

  export type TeamsUncheckedUpdateWithoutUsersInput = {
    teamId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyWithoutUsersInput = {
    teamId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesUpdateWithoutUsersInput = {
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesUncheckedUpdateWithoutUsersInput = {
    cacheId?: IntFieldUpdateOperationsInput | number
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CachesUncheckedUpdateManyWithoutUsersInput = {
    cacheId?: IntFieldUpdateOperationsInput | number
    cacheChange?: IntFieldUpdateOperationsInput | number
    cacheSource?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsUpdateWithoutUsersInput = {
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EnemyUsers?: UsersUpdateOneRequiredWithoutEnemyUsersNestedInput
  }

  export type MatchLogsUncheckedUpdateWithoutUsersInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    enemyUserId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsUncheckedUpdateManyWithoutUsersInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    enemyUserId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsUpdateWithoutEnemyUsersInput = {
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneRequiredWithoutUsersNestedInput
  }

  export type MatchLogsUncheckedUpdateWithoutEnemyUsersInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchLogsUncheckedUpdateManyWithoutEnemyUsersInput = {
    matchLogId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isWin?: IntFieldUpdateOperationsInput | number
    playedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateManyUserPlayer1Input = {
    teamId?: number
    userId: number
    userPlayerId2: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateManyUserPlayer2Input = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId3: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsCreateManyUserPlayer3Input = {
    teamId?: number
    userId: number
    userPlayerId1: number
    userPlayerId2: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsUpdateWithoutUserPlayer1Input = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutTeamsNestedInput
    UserPlayer2?: UserPlayersUpdateOneRequiredWithoutUserPlayer2NestedInput
    UserPlayer3?: UserPlayersUpdateOneRequiredWithoutUserPlayer3NestedInput
  }

  export type TeamsUncheckedUpdateWithoutUserPlayer1Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer1Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUpdateWithoutUserPlayer2Input = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutTeamsNestedInput
    UserPlayer1?: UserPlayersUpdateOneRequiredWithoutUserPlayer1NestedInput
    UserPlayer3?: UserPlayersUpdateOneRequiredWithoutUserPlayer3NestedInput
  }

  export type TeamsUncheckedUpdateWithoutUserPlayer2Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer2Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId3?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUpdateWithoutUserPlayer3Input = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UsersUpdateOneRequiredWithoutTeamsNestedInput
    UserPlayer1?: UserPlayersUpdateOneRequiredWithoutUserPlayer1NestedInput
    UserPlayer2?: UserPlayersUpdateOneRequiredWithoutUserPlayer2NestedInput
  }

  export type TeamsUncheckedUpdateWithoutUserPlayer3Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyWithoutUserPlayer3Input = {
    teamId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    userPlayerId1?: IntFieldUpdateOperationsInput | number
    userPlayerId2?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPlayersCountOutputTypeDefaultArgs instead
     */
    export type UserPlayersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPlayersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPlayersDefaultArgs instead
     */
    export type UserPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserPlayersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeamsDefaultArgs instead
     */
    export type TeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeamsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CachesDefaultArgs instead
     */
    export type CachesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CachesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MatchLogsDefaultArgs instead
     */
    export type MatchLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MatchLogsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}