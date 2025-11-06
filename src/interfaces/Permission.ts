export enum Method {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum Scope {
    Read = 'read',
    Write = 'write',
    Update = 'update',
    Delete = 'delete'
}

export const permission = [
    {
        method: Method.GET,
        scope: Scope.Read,
        permission: ['admin_granted']
    },
    {
        method: Method.POST,
        scope: Scope.Write,
        permission: ['admin_granted']
    },
    {
        method: Method.PUT,
        scope: Scope.Update,
        permission: ['admin_granted']
    },
    {
        method: Method.DELETE,
        scope: Scope.Delete,
        permission: ['admin_granted']
    }
]