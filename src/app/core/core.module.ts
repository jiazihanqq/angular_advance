import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconRegistry } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';
import { SharedModule } from '../shared';
import { AppRoutingModule } from '../app.routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import 'rxjs/add/observable/combinLatest';
import 'rxjs/add/observable/from';
import 'rxjs/add/opertator/take';
import 'rxjs/add/opertator/distinctUntilChanged';
import 'rxjs/add/opertator/combinLatest';
import '../utils/debug.util';
// 适合仅加载一次的组件，header和footer和navibar
@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AppRoutingModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers:[
    {provide:"BASE_CONFIG", useValue:"http://localhost:3000"}
  ]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parent: CoreModule, ir: MatIconRegistry, ds: DomSanitizer) {
    if (parent) {
      throw new Error("模块已经存在")
    }
    loadSvgResources(ir, ds);
  }
}
