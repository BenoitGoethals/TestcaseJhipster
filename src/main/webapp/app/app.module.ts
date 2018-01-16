import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { TestcaseJhipsterSharedModule, UserRouteAccessService } from './shared';
import { TestcaseJhipsterAppRoutingModule} from './app-routing.module';
import { TestcaseJhipsterHomeModule } from './home/home.module';
import { TestcaseJhipsterAdminModule } from './admin/admin.module';
import { TestcaseJhipsterAccountModule } from './account/account.module';
import { TestcaseJhipsterEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        TestcaseJhipsterAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        TestcaseJhipsterSharedModule,
        TestcaseJhipsterHomeModule,
        TestcaseJhipsterAdminModule,
        TestcaseJhipsterAccountModule,
        TestcaseJhipsterEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class TestcaseJhipsterAppModule {}
