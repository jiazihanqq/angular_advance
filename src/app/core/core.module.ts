import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatIconRegistry } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { loadSvgResources } from '../utils/svg.utils';

// 适合仅加载一次的组件，header和footer和navibar
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent, SidebarComponent, FooterComponent
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {
  constructor(@SkipSelf() @Optional() parent: CoreModule,ir: MatIconRegistry, ds:DomSanitizer ) {
    if (parent) {
      throw new Error("模块已经存在")
    }
    loadSvgResources(ir, ds);
  }
}
