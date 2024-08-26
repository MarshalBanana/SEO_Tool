/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.UserToolUsageInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.createMany(input as any))),

        create: procedure.input($Schema.UserToolUsageInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.create(input as any))),

        deleteMany: procedure.input($Schema.UserToolUsageInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.deleteMany(input as any))),

        delete: procedure.input($Schema.UserToolUsageInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.delete(input as any))),

        findFirst: procedure.input($Schema.UserToolUsageInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).userToolUsage.findFirst(input as any))),

        findMany: procedure.input($Schema.UserToolUsageInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).userToolUsage.findMany(input as any))),

        findUnique: procedure.input($Schema.UserToolUsageInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).userToolUsage.findUnique(input as any))),

        updateMany: procedure.input($Schema.UserToolUsageInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.updateMany(input as any))),

        update: procedure.input($Schema.UserToolUsageInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).userToolUsage.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.UserToolUsageCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.UserToolUsageCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserToolUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserToolUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserToolUsageGetPayload<T>, Context>) => Promise<Prisma.UserToolUsageGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.UserToolUsageDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.UserToolUsageDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserToolUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserToolUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserToolUsageGetPayload<T>, Context>) => Promise<Prisma.UserToolUsageGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.UserToolUsageFindFirstArgs, TData = Prisma.UserToolUsageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserToolUsageFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserToolUsageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserToolUsageFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserToolUsageFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserToolUsageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserToolUsageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.UserToolUsageFindManyArgs, TData = Array<Prisma.UserToolUsageGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.UserToolUsageFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.UserToolUsageGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserToolUsageFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserToolUsageFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.UserToolUsageGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.UserToolUsageGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.UserToolUsageFindUniqueArgs, TData = Prisma.UserToolUsageGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.UserToolUsageFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.UserToolUsageGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.UserToolUsageFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.UserToolUsageFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.UserToolUsageGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.UserToolUsageGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.UserToolUsageUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.UserToolUsageUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.UserToolUsageUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.UserToolUsageGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.UserToolUsageGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.UserToolUsageUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.UserToolUsageUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.UserToolUsageGetPayload<T>, Context>) => Promise<Prisma.UserToolUsageGetPayload<T>>
            };

    };
}
