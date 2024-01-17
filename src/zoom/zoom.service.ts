import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import * as process from 'process';
import { ZoomUser } from './dto/zoom-user.dto';

@Injectable()
export class ZoomService {
  token: string;
  async login(): Promise<string> {
    try {
      const { data } = await axios.post(
        `${process.env.ACCESS_URL}${process.env.ACCOUNT_ID}`,
        {
          client_id: process.env.ZOOM_CLIENT_ID,
          client_secret: process.env.ZOOM_SECRET_KEY,
        },
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        },
      );
      console.log(data);
      this.token = data.access_token;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async getUsers(): Promise<AxiosResponse> {
    try {
      const response = await axios.get(`${process.env.BASE_URL}/`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async checkUser(user: ZoomUser): Promise<AxiosResponse> {
    try {
      const response = await axios.get(
        `${process.env.BASE_URL}/${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${this.token}`,
            'Content-Type': 'application/json',
          },
        },
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async createUser(req: ZoomUser): Promise<AxiosResponse> {
    const user = {
      action: 'create',
      user_info: {
        email: req.email,
        first_name: req.firstName,
        last_name: req.lastName,
        display_name: req.firstName + ' ' + req.lastName,
        password: req.password,
        type: 1,
        feature: {
          zoom_phone: true,
          zoom_one_type: 16,
        },
        plan_united_type: '1',
      },
    };
    try {
      const token = await this.login();
      const response = await axios.post(`https://api.zoom.us/v2/users`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}
