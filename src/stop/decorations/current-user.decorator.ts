import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from 'src/authentication/user.entity';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext): User => {
    const user = context.getArgs()[2].req.user;
    // const user = context.switchToHttp().getRequest().user;
    return {
      id: user.id,
      name: user.name,
    };
  },
);
