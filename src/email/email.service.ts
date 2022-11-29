import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';

interface EmailOptions {
  // 메일 옵션 타입
  to: string; // 수신자
  subject: string; // 메일 제목
  html: string; // 메일 본문 (html)
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    //nodeMailer에서 제공하는 transporter 객체.
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: '', //TODO : config
        pass: '', // TODO : config
      },
    });
  }
  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:3000'; // TODO: config
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
    const mailOptions: EmailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
          가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
          <form action="${url}" method="POST">
            <button>가입확인</button>
          </form>
        `,
    };
    return await this.transporter.sendMail(mailOptions);
  }
}
