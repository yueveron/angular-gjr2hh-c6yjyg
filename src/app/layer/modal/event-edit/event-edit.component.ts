import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { get, cloneDeep } from 'lodash';

const initFormData = {
  name: 'Test Name',
  age: '100',
  address: 'Haizhu'
};

@Component({
  selector: 'eventedit-modal',
  template: 
  `<nz-modal
    [(nzVisible)]="isVisible"
    [nzTitle]="modalTitle"
    [nzContent]="modalContent"
    (nzOnOk)="handleOk($event)"
    (nzOnCancel)="handleCancel($event)"
  >
    <ng-template #modalContent>
      <form nz-form>
        <ng-container *ngIf="modalType === 'add'">
            <div nz-form-item nz-row>
                <div nz-form-label nz-col [nzSm]="4" [nzXs]="24">
                    <label nz-form-item-required>Name:</label>
                </div>
                <div nz-form-control nz-col [nzSm]="16" [nzXs]="24" style="position: relative;">
                  <input nz-input name="name" [(ngModel)]="formData.name">                  
                </div>
            </div>
            <div nz-form-item nz-row>
                <div nz-form-label nz-col [nzSm]="4" [nzXs]="24">
                    <label nz-form-item-required>Age:</label>
                </div>
                <div nz-form-control nz-col [nzSm]="16" [nzXs]="24" style="position: relative;">
                  <input nz-input name="age" [(ngModel)]="formData.age">                  
                </div>
            </div>
            <div nz-form-item nz-row>
                <div nz-form-label nz-col [nzSm]="4" [nzXs]="24">
                    <label nz-form-item-required>Address:</label>
                </div>
                <div nz-form-control nz-col [nzSm]="16" [nzXs]="24" style="position: relative;">
                  <input nz-input name="address" [(ngModel)]="formData.address">                  
                </div>
            </div>
        </ng-container>
      </form>      
    </ng-template>
  </nz-modal>
  `,
  styles: [
  ]
})
export class EventEditModal implements OnInit {
  // 用 @Output() 装饰器和一个事件发射器 EventEmitter() 实例定义一个名为 notify 的属性。这可以让商品提醒组件在 notify 属性发生变化时发出事件
  @Output() okCallback = new EventEmitter(); 

  modalTitle = '编辑表单';
  isVisible = false;
  // 类型
  modalType = '';  
  // 表单数据
  formData = cloneDeep(initFormData);

  constructor() { }

  ngOnInit(): void {
  }

  // 新增
  showAddModal() {
    console.debug('showAddModal:', this.formData)
    this.modalType = 'add';
    this.modalTitle = '新增热点';
    this.isVisible = true;
  }

  // 编辑
  showUpdateModal(modalType = 'event', data: any = {}) {
    this.modalTitle = '编辑热点';
    this.modalType = modalType;
    // 表单参数
    this.formData = {
      name: data.name,
      age: data.age,
      address: data.address
    };
    this.isVisible = true;
  }

  // 取消
  handleCancel(e) {
    this.isVisible = false;
    this.formData = cloneDeep(initFormData);
  }

  // 确定
  handleOk(e) {
    e && e.preventDefault && e.preventDefault();
    //
    this.handleOkCb(this.formData);    
  }

  // 点击确定回调
  handleOkCb(res) {
    this.isVisible = false;
    this.okCallback.emit();
    console.debug('handleOkCb:', res)
  }

}
