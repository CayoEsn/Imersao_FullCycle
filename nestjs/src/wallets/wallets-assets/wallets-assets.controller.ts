import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { WalletsAssetsService } from './wallets-assets.service';

@Controller('wallets/:wallet_id/assets')
export class WalletsAssetsController {
  constructor(private walletAssetsService: WalletsAssetsService) {}

  @Get()
  all(@Param('wallet_id') wallet_id: string) {
    console.log('wallet_id', wallet_id);
    return this.walletAssetsService.all({
      wallet_id,
    });
  }

  @Post()
  create(
    @Param('wallet_id') wallet_id: string,
    @Body() body: { asset_id: string; shares: number },
  ) {
    return this.walletAssetsService.create({
      wallet_id,
      ...body,
    });
  }
}
