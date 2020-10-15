import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEditModal } from '../layer/modal/event-edit/event-edit.component'

import { get, cloneDeep, findIndex } from 'lodash';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.css']
})
export class CrudListComponent implements OnInit {
  @ViewChild(EventEditModal) private EventEditModal: EventEditModal;

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddNew(): void{
    // console.debug('click add new')
    this.EventEditModal.showAddModal();
  }

  onEditModal(type = 'event', data: any): void {
    // console.debug('data:', data)
    this.EventEditModal.showUpdateModal(type, data);
  }

  onRefreshList(res: any): void{
    // console.debug('onCallback::RefeashList:', res, this.listOfData)
    const newItem = cloneDeep(res.data);
    if(res.modeType === 'add'){
      newItem.key = this.listOfData.length+1
      this.listOfData.push(newItem)
    }else if(res.modeType === 'update'){
      const itemIndex = findIndex(this.listOfData, {key:newItem.key})
      // Replace item at index using native splice
      this.listOfData.splice(itemIndex, 1, newItem);
    }
  }

}
