
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
 * Model Players
 * 
 */
export type Players = $Result.DefaultSelection<Prisma.$PlayersPayload>
/**
 * Model Tiers
 * 
 */
export type Tiers = $Result.DefaultSelection<Prisma.$TiersPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.players.findMany()
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
   * // Fetch zero or more Players
   * const players = await prisma.players.findMany()
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
   * `prisma.players`: Exposes CRUD operations for the **Players** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.players.findMany()
    * ```
    */
  get players(): Prisma.PlayersDelegate<ExtArgs>;

  /**
   * `prisma.tiers`: Exposes CRUD operations for the **Tiers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tiers
    * const tiers = await prisma.tiers.findMany()
    * ```
    */
  get tiers(): Prisma.TiersDelegate<ExtArgs>;
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
    Players: 'Players',
    Tiers: 'Tiers'
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
      modelProps: "players" | "tiers"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Players: {
        payload: Prisma.$PlayersPayload<ExtArgs>
        fields: Prisma.PlayersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findFirst: {
            args: Prisma.PlayersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          findMany: {
            args: Prisma.PlayersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>[]
          }
          create: {
            args: Prisma.PlayersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          createMany: {
            args: Prisma.PlayersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PlayersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          update: {
            args: Prisma.PlayersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          deleteMany: {
            args: Prisma.PlayersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PlayersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayersPayload>
          }
          aggregate: {
            args: Prisma.PlayersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayers>
          }
          groupBy: {
            args: Prisma.PlayersGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayersGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayersCountArgs<ExtArgs>
            result: $Utils.Optional<PlayersCountAggregateOutputType> | number
          }
        }
      }
      Tiers: {
        payload: Prisma.$TiersPayload<ExtArgs>
        fields: Prisma.TiersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TiersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TiersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          findFirst: {
            args: Prisma.TiersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TiersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          findMany: {
            args: Prisma.TiersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>[]
          }
          create: {
            args: Prisma.TiersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          createMany: {
            args: Prisma.TiersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TiersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          update: {
            args: Prisma.TiersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          deleteMany: {
            args: Prisma.TiersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TiersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TiersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TiersPayload>
          }
          aggregate: {
            args: Prisma.TiersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTiers>
          }
          groupBy: {
            args: Prisma.TiersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TiersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TiersCountArgs<ExtArgs>
            result: $Utils.Optional<TiersCountAggregateOutputType> | number
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
   * Count Type TiersCountOutputType
   */

  export type TiersCountOutputType = {
    players: number
  }

  export type TiersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TiersCountOutputTypeCountPlayersArgs
  }

  // Custom InputTypes
  /**
   * TiersCountOutputType without action
   */
  export type TiersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TiersCountOutputType
     */
    select?: TiersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TiersCountOutputType without action
   */
  export type TiersCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Players
   */

  export type AggregatePlayers = {
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  export type PlayersAvgAggregateOutputType = {
    playerId: number | null
    position: number | null
    speed: number | null
    decision: number | null
    power: number | null
    defense: number | null
    stamina: number | null
    tierId: number | null
  }

  export type PlayersSumAggregateOutputType = {
    playerId: number | null
    position: number | null
    speed: number | null
    decision: number | null
    power: number | null
    defense: number | null
    stamina: number | null
    tierId: number | null
  }

  export type PlayersMinAggregateOutputType = {
    playerId: number | null
    name: string | null
    position: number | null
    speed: number | null
    decision: number | null
    power: number | null
    defense: number | null
    stamina: number | null
    tierId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayersMaxAggregateOutputType = {
    playerId: number | null
    name: string | null
    position: number | null
    speed: number | null
    decision: number | null
    power: number | null
    defense: number | null
    stamina: number | null
    tierId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlayersCountAggregateOutputType = {
    playerId: number
    name: number
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    tierId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlayersAvgAggregateInputType = {
    playerId?: true
    position?: true
    speed?: true
    decision?: true
    power?: true
    defense?: true
    stamina?: true
    tierId?: true
  }

  export type PlayersSumAggregateInputType = {
    playerId?: true
    position?: true
    speed?: true
    decision?: true
    power?: true
    defense?: true
    stamina?: true
    tierId?: true
  }

  export type PlayersMinAggregateInputType = {
    playerId?: true
    name?: true
    position?: true
    speed?: true
    decision?: true
    power?: true
    defense?: true
    stamina?: true
    tierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayersMaxAggregateInputType = {
    playerId?: true
    name?: true
    position?: true
    speed?: true
    decision?: true
    power?: true
    defense?: true
    stamina?: true
    tierId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlayersCountAggregateInputType = {
    playerId?: true
    name?: true
    position?: true
    speed?: true
    decision?: true
    power?: true
    defense?: true
    stamina?: true
    tierId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlayersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to aggregate.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayersMaxAggregateInputType
  }

  export type GetPlayersAggregateType<T extends PlayersAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayers[P]>
      : GetScalarType<T[P], AggregatePlayers[P]>
  }




  export type PlayersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithAggregationInput | PlayersOrderByWithAggregationInput[]
    by: PlayersScalarFieldEnum[] | PlayersScalarFieldEnum
    having?: PlayersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayersCountAggregateInputType | true
    _avg?: PlayersAvgAggregateInputType
    _sum?: PlayersSumAggregateInputType
    _min?: PlayersMinAggregateInputType
    _max?: PlayersMaxAggregateInputType
  }

  export type PlayersGroupByOutputType = {
    playerId: number
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    tierId: number
    createdAt: Date
    updatedAt: Date
    _count: PlayersCountAggregateOutputType | null
    _avg: PlayersAvgAggregateOutputType | null
    _sum: PlayersSumAggregateOutputType | null
    _min: PlayersMinAggregateOutputType | null
    _max: PlayersMaxAggregateOutputType | null
  }

  type GetPlayersGroupByPayload<T extends PlayersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayersGroupByOutputType[P]>
            : GetScalarType<T[P], PlayersGroupByOutputType[P]>
        }
      >
    >


  export type PlayersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    playerId?: boolean
    name?: boolean
    position?: boolean
    speed?: boolean
    decision?: boolean
    power?: boolean
    defense?: boolean
    stamina?: boolean
    tierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tiers?: boolean | TiersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["players"]>


  export type PlayersSelectScalar = {
    playerId?: boolean
    name?: boolean
    position?: boolean
    speed?: boolean
    decision?: boolean
    power?: boolean
    defense?: boolean
    stamina?: boolean
    tierId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlayersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tiers?: boolean | TiersDefaultArgs<ExtArgs>
  }

  export type $PlayersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Players"
    objects: {
      tiers: Prisma.$TiersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      playerId: number
      name: string
      position: number
      speed: number
      decision: number
      power: number
      defense: number
      stamina: number
      tierId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["players"]>
    composites: {}
  }

  type PlayersGetPayload<S extends boolean | null | undefined | PlayersDefaultArgs> = $Result.GetResult<Prisma.$PlayersPayload, S>

  type PlayersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlayersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlayersCountAggregateInputType | true
    }

  export interface PlayersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Players'], meta: { name: 'Players' } }
    /**
     * Find zero or one Players that matches the filter.
     * @param {PlayersFindUniqueArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayersFindUniqueArgs>(args: SelectSubset<T, PlayersFindUniqueArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Players that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PlayersFindUniqueOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayersFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayersFindFirstArgs>(args?: SelectSubset<T, PlayersFindFirstArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Players that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindFirstOrThrowArgs} args - Arguments to find a Players
     * @example
     * // Get one Players
     * const players = await prisma.players.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayersFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayersFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.players.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.players.findMany({ take: 10 })
     * 
     * // Only select the `playerId`
     * const playersWithPlayerIdOnly = await prisma.players.findMany({ select: { playerId: true } })
     * 
     */
    findMany<T extends PlayersFindManyArgs>(args?: SelectSubset<T, PlayersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Players.
     * @param {PlayersCreateArgs} args - Arguments to create a Players.
     * @example
     * // Create one Players
     * const Players = await prisma.players.create({
     *   data: {
     *     // ... data to create a Players
     *   }
     * })
     * 
     */
    create<T extends PlayersCreateArgs>(args: SelectSubset<T, PlayersCreateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Players.
     * @param {PlayersCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const players = await prisma.players.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayersCreateManyArgs>(args?: SelectSubset<T, PlayersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Players.
     * @param {PlayersDeleteArgs} args - Arguments to delete one Players.
     * @example
     * // Delete one Players
     * const Players = await prisma.players.delete({
     *   where: {
     *     // ... filter to delete one Players
     *   }
     * })
     * 
     */
    delete<T extends PlayersDeleteArgs>(args: SelectSubset<T, PlayersDeleteArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Players.
     * @param {PlayersUpdateArgs} args - Arguments to update one Players.
     * @example
     * // Update one Players
     * const players = await prisma.players.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayersUpdateArgs>(args: SelectSubset<T, PlayersUpdateArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Players.
     * @param {PlayersDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.players.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayersDeleteManyArgs>(args?: SelectSubset<T, PlayersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const players = await prisma.players.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayersUpdateManyArgs>(args: SelectSubset<T, PlayersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Players.
     * @param {PlayersUpsertArgs} args - Arguments to update or create a Players.
     * @example
     * // Update or create a Players
     * const players = await prisma.players.upsert({
     *   create: {
     *     // ... data to create a Players
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Players we want to update
     *   }
     * })
     */
    upsert<T extends PlayersUpsertArgs>(args: SelectSubset<T, PlayersUpsertArgs<ExtArgs>>): Prisma__PlayersClient<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.players.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayersCountArgs>(
      args?: Subset<T, PlayersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayersAggregateArgs>(args: Subset<T, PlayersAggregateArgs>): Prisma.PrismaPromise<GetPlayersAggregateType<T>>

    /**
     * Group by Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayersGroupByArgs} args - Group by arguments.
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
      T extends PlayersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayersGroupByArgs['orderBy'] }
        : { orderBy?: PlayersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Players model
   */
  readonly fields: PlayersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Players.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tiers<T extends TiersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TiersDefaultArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Players model
   */ 
  interface PlayersFieldRefs {
    readonly playerId: FieldRef<"Players", 'Int'>
    readonly name: FieldRef<"Players", 'String'>
    readonly position: FieldRef<"Players", 'Int'>
    readonly speed: FieldRef<"Players", 'Int'>
    readonly decision: FieldRef<"Players", 'Int'>
    readonly power: FieldRef<"Players", 'Int'>
    readonly defense: FieldRef<"Players", 'Int'>
    readonly stamina: FieldRef<"Players", 'Int'>
    readonly tierId: FieldRef<"Players", 'Int'>
    readonly createdAt: FieldRef<"Players", 'DateTime'>
    readonly updatedAt: FieldRef<"Players", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Players findUnique
   */
  export type PlayersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findUniqueOrThrow
   */
  export type PlayersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players findFirst
   */
  export type PlayersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findFirstOrThrow
   */
  export type PlayersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players findMany
   */
  export type PlayersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Players create
   */
  export type PlayersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to create a Players.
     */
    data: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
  }

  /**
   * Players createMany
   */
  export type PlayersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayersCreateManyInput | PlayersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Players update
   */
  export type PlayersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The data needed to update a Players.
     */
    data: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
    /**
     * Choose, which Players to update.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players updateMany
   */
  export type PlayersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayersWhereInput
  }

  /**
   * Players upsert
   */
  export type PlayersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * The filter to search for the Players to update in case it exists.
     */
    where: PlayersWhereUniqueInput
    /**
     * In case the Players found by the `where` argument doesn't exist, create a new Players with this data.
     */
    create: XOR<PlayersCreateInput, PlayersUncheckedCreateInput>
    /**
     * In case the Players was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayersUpdateInput, PlayersUncheckedUpdateInput>
  }

  /**
   * Players delete
   */
  export type PlayersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    /**
     * Filter which Players to delete.
     */
    where: PlayersWhereUniqueInput
  }

  /**
   * Players deleteMany
   */
  export type PlayersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayersWhereInput
  }

  /**
   * Players without action
   */
  export type PlayersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
  }


  /**
   * Model Tiers
   */

  export type AggregateTiers = {
    _count: TiersCountAggregateOutputType | null
    _avg: TiersAvgAggregateOutputType | null
    _sum: TiersSumAggregateOutputType | null
    _min: TiersMinAggregateOutputType | null
    _max: TiersMaxAggregateOutputType | null
  }

  export type TiersAvgAggregateOutputType = {
    tierId: number | null
    pickProbability: number | null
    salePrice: number | null
    extraStat: number | null
    defaultUpgradeProbability: number | null
    upgradeDecreaseProbability: number | null
    upgradePrice: number | null
  }

  export type TiersSumAggregateOutputType = {
    tierId: number | null
    pickProbability: number | null
    salePrice: number | null
    extraStat: number | null
    defaultUpgradeProbability: number | null
    upgradeDecreaseProbability: number | null
    upgradePrice: number | null
  }

  export type TiersMinAggregateOutputType = {
    tierId: number | null
    tierName: string | null
    pickProbability: number | null
    salePrice: number | null
    extraStat: number | null
    defaultUpgradeProbability: number | null
    upgradeDecreaseProbability: number | null
    upgradePrice: number | null
  }

  export type TiersMaxAggregateOutputType = {
    tierId: number | null
    tierName: string | null
    pickProbability: number | null
    salePrice: number | null
    extraStat: number | null
    defaultUpgradeProbability: number | null
    upgradeDecreaseProbability: number | null
    upgradePrice: number | null
  }

  export type TiersCountAggregateOutputType = {
    tierId: number
    tierName: number
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
    _all: number
  }


  export type TiersAvgAggregateInputType = {
    tierId?: true
    pickProbability?: true
    salePrice?: true
    extraStat?: true
    defaultUpgradeProbability?: true
    upgradeDecreaseProbability?: true
    upgradePrice?: true
  }

  export type TiersSumAggregateInputType = {
    tierId?: true
    pickProbability?: true
    salePrice?: true
    extraStat?: true
    defaultUpgradeProbability?: true
    upgradeDecreaseProbability?: true
    upgradePrice?: true
  }

  export type TiersMinAggregateInputType = {
    tierId?: true
    tierName?: true
    pickProbability?: true
    salePrice?: true
    extraStat?: true
    defaultUpgradeProbability?: true
    upgradeDecreaseProbability?: true
    upgradePrice?: true
  }

  export type TiersMaxAggregateInputType = {
    tierId?: true
    tierName?: true
    pickProbability?: true
    salePrice?: true
    extraStat?: true
    defaultUpgradeProbability?: true
    upgradeDecreaseProbability?: true
    upgradePrice?: true
  }

  export type TiersCountAggregateInputType = {
    tierId?: true
    tierName?: true
    pickProbability?: true
    salePrice?: true
    extraStat?: true
    defaultUpgradeProbability?: true
    upgradeDecreaseProbability?: true
    upgradePrice?: true
    _all?: true
  }

  export type TiersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tiers to aggregate.
     */
    where?: TiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiers to fetch.
     */
    orderBy?: TiersOrderByWithRelationInput | TiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tiers
    **/
    _count?: true | TiersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TiersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TiersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TiersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TiersMaxAggregateInputType
  }

  export type GetTiersAggregateType<T extends TiersAggregateArgs> = {
        [P in keyof T & keyof AggregateTiers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTiers[P]>
      : GetScalarType<T[P], AggregateTiers[P]>
  }




  export type TiersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TiersWhereInput
    orderBy?: TiersOrderByWithAggregationInput | TiersOrderByWithAggregationInput[]
    by: TiersScalarFieldEnum[] | TiersScalarFieldEnum
    having?: TiersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TiersCountAggregateInputType | true
    _avg?: TiersAvgAggregateInputType
    _sum?: TiersSumAggregateInputType
    _min?: TiersMinAggregateInputType
    _max?: TiersMaxAggregateInputType
  }

  export type TiersGroupByOutputType = {
    tierId: number
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
    _count: TiersCountAggregateOutputType | null
    _avg: TiersAvgAggregateOutputType | null
    _sum: TiersSumAggregateOutputType | null
    _min: TiersMinAggregateOutputType | null
    _max: TiersMaxAggregateOutputType | null
  }

  type GetTiersGroupByPayload<T extends TiersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TiersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TiersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TiersGroupByOutputType[P]>
            : GetScalarType<T[P], TiersGroupByOutputType[P]>
        }
      >
    >


  export type TiersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tierId?: boolean
    tierName?: boolean
    pickProbability?: boolean
    salePrice?: boolean
    extraStat?: boolean
    defaultUpgradeProbability?: boolean
    upgradeDecreaseProbability?: boolean
    upgradePrice?: boolean
    players?: boolean | Tiers$playersArgs<ExtArgs>
    _count?: boolean | TiersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tiers"]>


  export type TiersSelectScalar = {
    tierId?: boolean
    tierName?: boolean
    pickProbability?: boolean
    salePrice?: boolean
    extraStat?: boolean
    defaultUpgradeProbability?: boolean
    upgradeDecreaseProbability?: boolean
    upgradePrice?: boolean
  }

  export type TiersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Tiers$playersArgs<ExtArgs>
    _count?: boolean | TiersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TiersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tiers"
    objects: {
      players: Prisma.$PlayersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tierId: number
      tierName: string
      pickProbability: number
      salePrice: number
      extraStat: number
      defaultUpgradeProbability: number
      upgradeDecreaseProbability: number
      upgradePrice: number
    }, ExtArgs["result"]["tiers"]>
    composites: {}
  }

  type TiersGetPayload<S extends boolean | null | undefined | TiersDefaultArgs> = $Result.GetResult<Prisma.$TiersPayload, S>

  type TiersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TiersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TiersCountAggregateInputType | true
    }

  export interface TiersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tiers'], meta: { name: 'Tiers' } }
    /**
     * Find zero or one Tiers that matches the filter.
     * @param {TiersFindUniqueArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TiersFindUniqueArgs>(args: SelectSubset<T, TiersFindUniqueArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Tiers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TiersFindUniqueOrThrowArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TiersFindUniqueOrThrowArgs>(args: SelectSubset<T, TiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Tiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersFindFirstArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TiersFindFirstArgs>(args?: SelectSubset<T, TiersFindFirstArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Tiers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersFindFirstOrThrowArgs} args - Arguments to find a Tiers
     * @example
     * // Get one Tiers
     * const tiers = await prisma.tiers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TiersFindFirstOrThrowArgs>(args?: SelectSubset<T, TiersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tiers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tiers
     * const tiers = await prisma.tiers.findMany()
     * 
     * // Get first 10 Tiers
     * const tiers = await prisma.tiers.findMany({ take: 10 })
     * 
     * // Only select the `tierId`
     * const tiersWithTierIdOnly = await prisma.tiers.findMany({ select: { tierId: true } })
     * 
     */
    findMany<T extends TiersFindManyArgs>(args?: SelectSubset<T, TiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Tiers.
     * @param {TiersCreateArgs} args - Arguments to create a Tiers.
     * @example
     * // Create one Tiers
     * const Tiers = await prisma.tiers.create({
     *   data: {
     *     // ... data to create a Tiers
     *   }
     * })
     * 
     */
    create<T extends TiersCreateArgs>(args: SelectSubset<T, TiersCreateArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tiers.
     * @param {TiersCreateManyArgs} args - Arguments to create many Tiers.
     * @example
     * // Create many Tiers
     * const tiers = await prisma.tiers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TiersCreateManyArgs>(args?: SelectSubset<T, TiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tiers.
     * @param {TiersDeleteArgs} args - Arguments to delete one Tiers.
     * @example
     * // Delete one Tiers
     * const Tiers = await prisma.tiers.delete({
     *   where: {
     *     // ... filter to delete one Tiers
     *   }
     * })
     * 
     */
    delete<T extends TiersDeleteArgs>(args: SelectSubset<T, TiersDeleteArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Tiers.
     * @param {TiersUpdateArgs} args - Arguments to update one Tiers.
     * @example
     * // Update one Tiers
     * const tiers = await prisma.tiers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TiersUpdateArgs>(args: SelectSubset<T, TiersUpdateArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tiers.
     * @param {TiersDeleteManyArgs} args - Arguments to filter Tiers to delete.
     * @example
     * // Delete a few Tiers
     * const { count } = await prisma.tiers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TiersDeleteManyArgs>(args?: SelectSubset<T, TiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tiers
     * const tiers = await prisma.tiers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TiersUpdateManyArgs>(args: SelectSubset<T, TiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tiers.
     * @param {TiersUpsertArgs} args - Arguments to update or create a Tiers.
     * @example
     * // Update or create a Tiers
     * const tiers = await prisma.tiers.upsert({
     *   create: {
     *     // ... data to create a Tiers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tiers we want to update
     *   }
     * })
     */
    upsert<T extends TiersUpsertArgs>(args: SelectSubset<T, TiersUpsertArgs<ExtArgs>>): Prisma__TiersClient<$Result.GetResult<Prisma.$TiersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersCountArgs} args - Arguments to filter Tiers to count.
     * @example
     * // Count the number of Tiers
     * const count = await prisma.tiers.count({
     *   where: {
     *     // ... the filter for the Tiers we want to count
     *   }
     * })
    **/
    count<T extends TiersCountArgs>(
      args?: Subset<T, TiersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TiersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TiersAggregateArgs>(args: Subset<T, TiersAggregateArgs>): Prisma.PrismaPromise<GetTiersAggregateType<T>>

    /**
     * Group by Tiers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TiersGroupByArgs} args - Group by arguments.
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
      T extends TiersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TiersGroupByArgs['orderBy'] }
        : { orderBy?: TiersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tiers model
   */
  readonly fields: TiersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tiers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TiersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Tiers$playersArgs<ExtArgs> = {}>(args?: Subset<T, Tiers$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayersPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Tiers model
   */ 
  interface TiersFieldRefs {
    readonly tierId: FieldRef<"Tiers", 'Int'>
    readonly tierName: FieldRef<"Tiers", 'String'>
    readonly pickProbability: FieldRef<"Tiers", 'Int'>
    readonly salePrice: FieldRef<"Tiers", 'Int'>
    readonly extraStat: FieldRef<"Tiers", 'Int'>
    readonly defaultUpgradeProbability: FieldRef<"Tiers", 'Int'>
    readonly upgradeDecreaseProbability: FieldRef<"Tiers", 'Int'>
    readonly upgradePrice: FieldRef<"Tiers", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tiers findUnique
   */
  export type TiersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter, which Tiers to fetch.
     */
    where: TiersWhereUniqueInput
  }

  /**
   * Tiers findUniqueOrThrow
   */
  export type TiersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter, which Tiers to fetch.
     */
    where: TiersWhereUniqueInput
  }

  /**
   * Tiers findFirst
   */
  export type TiersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter, which Tiers to fetch.
     */
    where?: TiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiers to fetch.
     */
    orderBy?: TiersOrderByWithRelationInput | TiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiers.
     */
    cursor?: TiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiers.
     */
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * Tiers findFirstOrThrow
   */
  export type TiersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter, which Tiers to fetch.
     */
    where?: TiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiers to fetch.
     */
    orderBy?: TiersOrderByWithRelationInput | TiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tiers.
     */
    cursor?: TiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tiers.
     */
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * Tiers findMany
   */
  export type TiersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter, which Tiers to fetch.
     */
    where?: TiersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tiers to fetch.
     */
    orderBy?: TiersOrderByWithRelationInput | TiersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tiers.
     */
    cursor?: TiersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tiers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tiers.
     */
    skip?: number
    distinct?: TiersScalarFieldEnum | TiersScalarFieldEnum[]
  }

  /**
   * Tiers create
   */
  export type TiersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * The data needed to create a Tiers.
     */
    data: XOR<TiersCreateInput, TiersUncheckedCreateInput>
  }

  /**
   * Tiers createMany
   */
  export type TiersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tiers.
     */
    data: TiersCreateManyInput | TiersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tiers update
   */
  export type TiersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * The data needed to update a Tiers.
     */
    data: XOR<TiersUpdateInput, TiersUncheckedUpdateInput>
    /**
     * Choose, which Tiers to update.
     */
    where: TiersWhereUniqueInput
  }

  /**
   * Tiers updateMany
   */
  export type TiersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tiers.
     */
    data: XOR<TiersUpdateManyMutationInput, TiersUncheckedUpdateManyInput>
    /**
     * Filter which Tiers to update
     */
    where?: TiersWhereInput
  }

  /**
   * Tiers upsert
   */
  export type TiersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * The filter to search for the Tiers to update in case it exists.
     */
    where: TiersWhereUniqueInput
    /**
     * In case the Tiers found by the `where` argument doesn't exist, create a new Tiers with this data.
     */
    create: XOR<TiersCreateInput, TiersUncheckedCreateInput>
    /**
     * In case the Tiers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TiersUpdateInput, TiersUncheckedUpdateInput>
  }

  /**
   * Tiers delete
   */
  export type TiersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
    /**
     * Filter which Tiers to delete.
     */
    where: TiersWhereUniqueInput
  }

  /**
   * Tiers deleteMany
   */
  export type TiersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tiers to delete
     */
    where?: TiersWhereInput
  }

  /**
   * Tiers.players
   */
  export type Tiers$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Players
     */
    select?: PlayersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayersInclude<ExtArgs> | null
    where?: PlayersWhereInput
    orderBy?: PlayersOrderByWithRelationInput | PlayersOrderByWithRelationInput[]
    cursor?: PlayersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayersScalarFieldEnum | PlayersScalarFieldEnum[]
  }

  /**
   * Tiers without action
   */
  export type TiersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tiers
     */
    select?: TiersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TiersInclude<ExtArgs> | null
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


  export const PlayersScalarFieldEnum: {
    playerId: 'playerId',
    name: 'name',
    position: 'position',
    speed: 'speed',
    decision: 'decision',
    power: 'power',
    defense: 'defense',
    stamina: 'stamina',
    tierId: 'tierId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlayersScalarFieldEnum = (typeof PlayersScalarFieldEnum)[keyof typeof PlayersScalarFieldEnum]


  export const TiersScalarFieldEnum: {
    tierId: 'tierId',
    tierName: 'tierName',
    pickProbability: 'pickProbability',
    salePrice: 'salePrice',
    extraStat: 'extraStat',
    defaultUpgradeProbability: 'defaultUpgradeProbability',
    upgradeDecreaseProbability: 'upgradeDecreaseProbability',
    upgradePrice: 'upgradePrice'
  };

  export type TiersScalarFieldEnum = (typeof TiersScalarFieldEnum)[keyof typeof TiersScalarFieldEnum]


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


  export type PlayersWhereInput = {
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    playerId?: IntFilter<"Players"> | number
    name?: StringFilter<"Players"> | string
    position?: IntFilter<"Players"> | number
    speed?: IntFilter<"Players"> | number
    decision?: IntFilter<"Players"> | number
    power?: IntFilter<"Players"> | number
    defense?: IntFilter<"Players"> | number
    stamina?: IntFilter<"Players"> | number
    tierId?: IntFilter<"Players"> | number
    createdAt?: DateTimeFilter<"Players"> | Date | string
    updatedAt?: DateTimeFilter<"Players"> | Date | string
    tiers?: XOR<TiersRelationFilter, TiersWhereInput>
  }

  export type PlayersOrderByWithRelationInput = {
    playerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tiers?: TiersOrderByWithRelationInput
  }

  export type PlayersWhereUniqueInput = Prisma.AtLeast<{
    playerId?: number
    name?: string
    AND?: PlayersWhereInput | PlayersWhereInput[]
    OR?: PlayersWhereInput[]
    NOT?: PlayersWhereInput | PlayersWhereInput[]
    position?: IntFilter<"Players"> | number
    speed?: IntFilter<"Players"> | number
    decision?: IntFilter<"Players"> | number
    power?: IntFilter<"Players"> | number
    defense?: IntFilter<"Players"> | number
    stamina?: IntFilter<"Players"> | number
    tierId?: IntFilter<"Players"> | number
    createdAt?: DateTimeFilter<"Players"> | Date | string
    updatedAt?: DateTimeFilter<"Players"> | Date | string
    tiers?: XOR<TiersRelationFilter, TiersWhereInput>
  }, "playerId" | "name">

  export type PlayersOrderByWithAggregationInput = {
    playerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlayersCountOrderByAggregateInput
    _avg?: PlayersAvgOrderByAggregateInput
    _max?: PlayersMaxOrderByAggregateInput
    _min?: PlayersMinOrderByAggregateInput
    _sum?: PlayersSumOrderByAggregateInput
  }

  export type PlayersScalarWhereWithAggregatesInput = {
    AND?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    OR?: PlayersScalarWhereWithAggregatesInput[]
    NOT?: PlayersScalarWhereWithAggregatesInput | PlayersScalarWhereWithAggregatesInput[]
    playerId?: IntWithAggregatesFilter<"Players"> | number
    name?: StringWithAggregatesFilter<"Players"> | string
    position?: IntWithAggregatesFilter<"Players"> | number
    speed?: IntWithAggregatesFilter<"Players"> | number
    decision?: IntWithAggregatesFilter<"Players"> | number
    power?: IntWithAggregatesFilter<"Players"> | number
    defense?: IntWithAggregatesFilter<"Players"> | number
    stamina?: IntWithAggregatesFilter<"Players"> | number
    tierId?: IntWithAggregatesFilter<"Players"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Players"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Players"> | Date | string
  }

  export type TiersWhereInput = {
    AND?: TiersWhereInput | TiersWhereInput[]
    OR?: TiersWhereInput[]
    NOT?: TiersWhereInput | TiersWhereInput[]
    tierId?: IntFilter<"Tiers"> | number
    tierName?: StringFilter<"Tiers"> | string
    pickProbability?: IntFilter<"Tiers"> | number
    salePrice?: IntFilter<"Tiers"> | number
    extraStat?: IntFilter<"Tiers"> | number
    defaultUpgradeProbability?: IntFilter<"Tiers"> | number
    upgradeDecreaseProbability?: IntFilter<"Tiers"> | number
    upgradePrice?: IntFilter<"Tiers"> | number
    players?: PlayersListRelationFilter
  }

  export type TiersOrderByWithRelationInput = {
    tierId?: SortOrder
    tierName?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
    players?: PlayersOrderByRelationAggregateInput
  }

  export type TiersWhereUniqueInput = Prisma.AtLeast<{
    tierId?: number
    AND?: TiersWhereInput | TiersWhereInput[]
    OR?: TiersWhereInput[]
    NOT?: TiersWhereInput | TiersWhereInput[]
    tierName?: StringFilter<"Tiers"> | string
    pickProbability?: IntFilter<"Tiers"> | number
    salePrice?: IntFilter<"Tiers"> | number
    extraStat?: IntFilter<"Tiers"> | number
    defaultUpgradeProbability?: IntFilter<"Tiers"> | number
    upgradeDecreaseProbability?: IntFilter<"Tiers"> | number
    upgradePrice?: IntFilter<"Tiers"> | number
    players?: PlayersListRelationFilter
  }, "tierId">

  export type TiersOrderByWithAggregationInput = {
    tierId?: SortOrder
    tierName?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
    _count?: TiersCountOrderByAggregateInput
    _avg?: TiersAvgOrderByAggregateInput
    _max?: TiersMaxOrderByAggregateInput
    _min?: TiersMinOrderByAggregateInput
    _sum?: TiersSumOrderByAggregateInput
  }

  export type TiersScalarWhereWithAggregatesInput = {
    AND?: TiersScalarWhereWithAggregatesInput | TiersScalarWhereWithAggregatesInput[]
    OR?: TiersScalarWhereWithAggregatesInput[]
    NOT?: TiersScalarWhereWithAggregatesInput | TiersScalarWhereWithAggregatesInput[]
    tierId?: IntWithAggregatesFilter<"Tiers"> | number
    tierName?: StringWithAggregatesFilter<"Tiers"> | string
    pickProbability?: IntWithAggregatesFilter<"Tiers"> | number
    salePrice?: IntWithAggregatesFilter<"Tiers"> | number
    extraStat?: IntWithAggregatesFilter<"Tiers"> | number
    defaultUpgradeProbability?: IntWithAggregatesFilter<"Tiers"> | number
    upgradeDecreaseProbability?: IntWithAggregatesFilter<"Tiers"> | number
    upgradePrice?: IntWithAggregatesFilter<"Tiers"> | number
  }

  export type PlayersCreateInput = {
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tiers: TiersCreateNestedOneWithoutPlayersInput
  }

  export type PlayersUncheckedCreateInput = {
    playerId?: number
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    tierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tiers?: TiersUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type PlayersUncheckedUpdateInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    tierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersCreateManyInput = {
    playerId?: number
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    tierId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersUncheckedUpdateManyInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    tierId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TiersCreateInput = {
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
    players?: PlayersCreateNestedManyWithoutTiersInput
  }

  export type TiersUncheckedCreateInput = {
    tierId?: number
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
    players?: PlayersUncheckedCreateNestedManyWithoutTiersInput
  }

  export type TiersUpdateInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
    players?: PlayersUpdateManyWithoutTiersNestedInput
  }

  export type TiersUncheckedUpdateInput = {
    tierId?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
    players?: PlayersUncheckedUpdateManyWithoutTiersNestedInput
  }

  export type TiersCreateManyInput = {
    tierId?: number
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
  }

  export type TiersUpdateManyMutationInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
  }

  export type TiersUncheckedUpdateManyInput = {
    tierId?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
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

  export type TiersRelationFilter = {
    is?: TiersWhereInput
    isNot?: TiersWhereInput
  }

  export type PlayersCountOrderByAggregateInput = {
    playerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersAvgOrderByAggregateInput = {
    playerId?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
  }

  export type PlayersMaxOrderByAggregateInput = {
    playerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersMinOrderByAggregateInput = {
    playerId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlayersSumOrderByAggregateInput = {
    playerId?: SortOrder
    position?: SortOrder
    speed?: SortOrder
    decision?: SortOrder
    power?: SortOrder
    defense?: SortOrder
    stamina?: SortOrder
    tierId?: SortOrder
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

  export type PlayersListRelationFilter = {
    every?: PlayersWhereInput
    some?: PlayersWhereInput
    none?: PlayersWhereInput
  }

  export type PlayersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TiersCountOrderByAggregateInput = {
    tierId?: SortOrder
    tierName?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
  }

  export type TiersAvgOrderByAggregateInput = {
    tierId?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
  }

  export type TiersMaxOrderByAggregateInput = {
    tierId?: SortOrder
    tierName?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
  }

  export type TiersMinOrderByAggregateInput = {
    tierId?: SortOrder
    tierName?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
  }

  export type TiersSumOrderByAggregateInput = {
    tierId?: SortOrder
    pickProbability?: SortOrder
    salePrice?: SortOrder
    extraStat?: SortOrder
    defaultUpgradeProbability?: SortOrder
    upgradeDecreaseProbability?: SortOrder
    upgradePrice?: SortOrder
  }

  export type TiersCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TiersCreateWithoutPlayersInput, TiersUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TiersCreateOrConnectWithoutPlayersInput
    connect?: TiersWhereUniqueInput
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

  export type TiersUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TiersCreateWithoutPlayersInput, TiersUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TiersCreateOrConnectWithoutPlayersInput
    upsert?: TiersUpsertWithoutPlayersInput
    connect?: TiersWhereUniqueInput
    update?: XOR<XOR<TiersUpdateToOneWithWhereWithoutPlayersInput, TiersUpdateWithoutPlayersInput>, TiersUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayersCreateNestedManyWithoutTiersInput = {
    create?: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput> | PlayersCreateWithoutTiersInput[] | PlayersUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTiersInput | PlayersCreateOrConnectWithoutTiersInput[]
    createMany?: PlayersCreateManyTiersInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayersUncheckedCreateNestedManyWithoutTiersInput = {
    create?: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput> | PlayersCreateWithoutTiersInput[] | PlayersUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTiersInput | PlayersCreateOrConnectWithoutTiersInput[]
    createMany?: PlayersCreateManyTiersInputEnvelope
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
  }

  export type PlayersUpdateManyWithoutTiersNestedInput = {
    create?: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput> | PlayersCreateWithoutTiersInput[] | PlayersUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTiersInput | PlayersCreateOrConnectWithoutTiersInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTiersInput | PlayersUpsertWithWhereUniqueWithoutTiersInput[]
    createMany?: PlayersCreateManyTiersInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTiersInput | PlayersUpdateWithWhereUniqueWithoutTiersInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTiersInput | PlayersUpdateManyWithWhereWithoutTiersInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
  }

  export type PlayersUncheckedUpdateManyWithoutTiersNestedInput = {
    create?: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput> | PlayersCreateWithoutTiersInput[] | PlayersUncheckedCreateWithoutTiersInput[]
    connectOrCreate?: PlayersCreateOrConnectWithoutTiersInput | PlayersCreateOrConnectWithoutTiersInput[]
    upsert?: PlayersUpsertWithWhereUniqueWithoutTiersInput | PlayersUpsertWithWhereUniqueWithoutTiersInput[]
    createMany?: PlayersCreateManyTiersInputEnvelope
    set?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    disconnect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    delete?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    connect?: PlayersWhereUniqueInput | PlayersWhereUniqueInput[]
    update?: PlayersUpdateWithWhereUniqueWithoutTiersInput | PlayersUpdateWithWhereUniqueWithoutTiersInput[]
    updateMany?: PlayersUpdateManyWithWhereWithoutTiersInput | PlayersUpdateManyWithWhereWithoutTiersInput[]
    deleteMany?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
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

  export type TiersCreateWithoutPlayersInput = {
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
  }

  export type TiersUncheckedCreateWithoutPlayersInput = {
    tierId?: number
    tierName: string
    pickProbability: number
    salePrice: number
    extraStat: number
    defaultUpgradeProbability: number
    upgradeDecreaseProbability: number
    upgradePrice: number
  }

  export type TiersCreateOrConnectWithoutPlayersInput = {
    where: TiersWhereUniqueInput
    create: XOR<TiersCreateWithoutPlayersInput, TiersUncheckedCreateWithoutPlayersInput>
  }

  export type TiersUpsertWithoutPlayersInput = {
    update: XOR<TiersUpdateWithoutPlayersInput, TiersUncheckedUpdateWithoutPlayersInput>
    create: XOR<TiersCreateWithoutPlayersInput, TiersUncheckedCreateWithoutPlayersInput>
    where?: TiersWhereInput
  }

  export type TiersUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TiersWhereInput
    data: XOR<TiersUpdateWithoutPlayersInput, TiersUncheckedUpdateWithoutPlayersInput>
  }

  export type TiersUpdateWithoutPlayersInput = {
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
  }

  export type TiersUncheckedUpdateWithoutPlayersInput = {
    tierId?: IntFieldUpdateOperationsInput | number
    tierName?: StringFieldUpdateOperationsInput | string
    pickProbability?: IntFieldUpdateOperationsInput | number
    salePrice?: IntFieldUpdateOperationsInput | number
    extraStat?: IntFieldUpdateOperationsInput | number
    defaultUpgradeProbability?: IntFieldUpdateOperationsInput | number
    upgradeDecreaseProbability?: IntFieldUpdateOperationsInput | number
    upgradePrice?: IntFieldUpdateOperationsInput | number
  }

  export type PlayersCreateWithoutTiersInput = {
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUncheckedCreateWithoutTiersInput = {
    playerId?: number
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersCreateOrConnectWithoutTiersInput = {
    where: PlayersWhereUniqueInput
    create: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput>
  }

  export type PlayersCreateManyTiersInputEnvelope = {
    data: PlayersCreateManyTiersInput | PlayersCreateManyTiersInput[]
    skipDuplicates?: boolean
  }

  export type PlayersUpsertWithWhereUniqueWithoutTiersInput = {
    where: PlayersWhereUniqueInput
    update: XOR<PlayersUpdateWithoutTiersInput, PlayersUncheckedUpdateWithoutTiersInput>
    create: XOR<PlayersCreateWithoutTiersInput, PlayersUncheckedCreateWithoutTiersInput>
  }

  export type PlayersUpdateWithWhereUniqueWithoutTiersInput = {
    where: PlayersWhereUniqueInput
    data: XOR<PlayersUpdateWithoutTiersInput, PlayersUncheckedUpdateWithoutTiersInput>
  }

  export type PlayersUpdateManyWithWhereWithoutTiersInput = {
    where: PlayersScalarWhereInput
    data: XOR<PlayersUpdateManyMutationInput, PlayersUncheckedUpdateManyWithoutTiersInput>
  }

  export type PlayersScalarWhereInput = {
    AND?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    OR?: PlayersScalarWhereInput[]
    NOT?: PlayersScalarWhereInput | PlayersScalarWhereInput[]
    playerId?: IntFilter<"Players"> | number
    name?: StringFilter<"Players"> | string
    position?: IntFilter<"Players"> | number
    speed?: IntFilter<"Players"> | number
    decision?: IntFilter<"Players"> | number
    power?: IntFilter<"Players"> | number
    defense?: IntFilter<"Players"> | number
    stamina?: IntFilter<"Players"> | number
    tierId?: IntFilter<"Players"> | number
    createdAt?: DateTimeFilter<"Players"> | Date | string
    updatedAt?: DateTimeFilter<"Players"> | Date | string
  }

  export type PlayersCreateManyTiersInput = {
    playerId?: number
    name: string
    position: number
    speed: number
    decision: number
    power: number
    defense: number
    stamina: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlayersUpdateWithoutTiersInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersUncheckedUpdateWithoutTiersInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayersUncheckedUpdateManyWithoutTiersInput = {
    playerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    decision?: IntFieldUpdateOperationsInput | number
    power?: IntFieldUpdateOperationsInput | number
    defense?: IntFieldUpdateOperationsInput | number
    stamina?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TiersCountOutputTypeDefaultArgs instead
     */
    export type TiersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TiersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayersDefaultArgs instead
     */
    export type PlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlayersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TiersDefaultArgs instead
     */
    export type TiersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TiersDefaultArgs<ExtArgs>

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