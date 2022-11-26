import { AuthGuard } from '@nestjs/passport';

class JwtGuard extends AuthGuard('jwt-refresh') {
  constructor() {
    super();
  }
}

export default JwtGuard;
