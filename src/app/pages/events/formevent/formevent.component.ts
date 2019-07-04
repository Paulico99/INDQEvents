import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EventosService } from '../../../services/eventos.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-formevent',
  templateUrl: './formevent.component.html',
  styleUrls: ['./formevent.component.css']
})
export class FormeventComponent implements OnInit {
  RegisterEvent: FormGroup;
  RegisterImage: FormGroup;
  url = '';

  selectedFile : ImageSnippet;

  constructor(private formBuilder: FormBuilder, private eventService: EventosService ) { }

  ngOnInit() {
    this.RegisterEvent = this.formBuilder.group({
      id : [null, Validators.required],
      title : [null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
        ]
      ],
      description: [null, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]+$')
        ]) 
      ],
      date : [null, Validators.required ],
      image : [null, Validators.required],
      attendances : [null, Validators.required],
      willYouAttend: [null, Validators.required],
      location: [null,Validators.required],
    });

    this.RegisterImage = this.formBuilder.group({
        id: [null , Validators.required],
        fileName: [null, Validators.required],
    })

  }

  addEvent(){
    let formObj: any = this.RegisterEvent.value;
    this.eventService.createEvento(JSON.stringify(formObj)).subscribe((response: any) => {
      console.log(response);
    }, err => {
      console.log(err);
    })
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.eventService.imageEvento(this.selectedFile.file).subscribe(
        (res) => {
        
        },
        (err) => {
        
        })
    });

    reader.readAsDataURL(file);
  }
}
