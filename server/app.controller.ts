import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('api/speakers')
  findAllSpeakers(): any[] {
    return [
      {
        name: 'House 1',
        talk: 'Dream',
        image: 'https://cdn.vox-cdn.com/thumbor/2-gD2iaTojIQ94v3m52TUr5ekgs=/0x0:3760x2500/920x613/filters:focal(1580x950:2180x1550):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65135516/shutterstock_349464740.0.jpg'
      },
      {
        name: 'House 2',
        talk: 'Dream 2 ',
        image: 'https://freshome.com/wp-content/uploads/2018/09/contemporary-exterior.jpg'
      },
      {
        name: 'House 3',
        talk: 'Dream 3',
        image: 'https://www.washingtonian.com/wp-content/uploads/2019/05/ArlingtonFeatured54.jpg'
      }
    ];
  }
}
