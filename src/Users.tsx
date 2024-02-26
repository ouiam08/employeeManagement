import {User} from './types/UserTypes';

export const Users: User[] = [
    {
        id: "u1",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        creationDate: new Date('2023-01-15T08:30:00'),
        state: "Actif"
    },
    {
        id: "u2",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane@example.com",
        creationDate: new Date('2023-02-20T12:45:00'),
        state: "SUSPENDU"
    },
    {
        id: "u3",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice@example.com",
        creationDate: new Date('2023-03-25T18:00:00'),
        state: "Actif"
    }
];

export default Users;
