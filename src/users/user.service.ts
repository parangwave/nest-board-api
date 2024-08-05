import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users: User[] = [];
  private idCounter = 1; // for user id

  // user 생성
  async create(userDto: CreateUserDto): Promise<User> {
    const user = new User();
    user.id = this.idCounter++;
    user.username = userDto.username;
    user.password = userDto.password; // 비밀번호를 평문으로 저장
    this.users.push(user);
    return user;
  }

  // user 검색
  async search(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  // user 삭제
  async delete(id: number): Promise<void> {
    this.users = this.users.filter((user) => user.id !== id);
  }
}
