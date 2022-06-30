import { rest } from "msw";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: Math.random(),
        firstName: 'John',
        lastName: 'Maverick',
      }),
    )
  }),
]