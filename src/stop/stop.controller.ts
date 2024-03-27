import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { StopService } from './stop.service';
import { CreateStopDto } from './dtos/create-stop.dto';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { CurrentUser } from './decorations/current-user.decorator';
import { User } from '../authentication/user.entity';

@UseGuards(JwtAuthGuard)
@Controller('stop')
export class StopController {
  constructor(private stopService: StopService) {}

  @Get('/:id')
  async getStop(@Param('id') id: string) {
    return this.stopService.findOne(parseInt(id));
  }

  @Get()
  async getStops() {
    return this.stopService.findAll();
  }

  @Post()
  async createStop(@Body() body: CreateStopDto, @CurrentUser() user: User) {
    return this.stopService.create(body, user);
  }

  @Put('/:id')
  async updateStop(@Param('id') id: string, @Body() body: CreateStopDto) {
    return this.stopService.update(parseInt(id), body);
  }

  @Delete('/:id')
  async removeStop(@Param('id') id: string) {
    return this.stopService.remove(parseInt(id));
  }
}
