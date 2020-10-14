import { Component, OnInit, ViewChild } from '@angular/core';
import { EventEditModal } from '../layer/modal/event-edit/event-edit.component'

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
    console.debug('click add new')
    this.EventEditModal.showAddModal();
  }

  onEditModal(type = 'event', data: any): void {
    console.debug('data:', data)
  }

  onRefreshList(): void{
    console.debug('onCallback::RefeashList')
  }

}
