export const throwError = (messageOrError: string | Error): never => {
    throw typeof messageOrError === 'string' ? new Error(messageOrError) : messageOrError;
};
