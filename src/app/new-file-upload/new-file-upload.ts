import { Component } from "@angular/core";

@Component({
    selector: 'file-uploader',
    templateUrl: './new-file-upload.html',
    styleUrls: ['./new-file-upload.css'],
    inputs:['activeColor','baseColor','overlayColor']
})
export class FileUploaderComponent {
    
    activeColor: string = 'green';
    baseColor: string = '#ccc';
    overlayColor: string = 'rgba(255,255,255,0.5)';
    
    dragging: boolean = false;
    loaded: boolean = false;
    imageLoaded: boolean = false;
    imageSrc: string = '';
    
    handleDragEnter() {
        this.dragging = true;
    }
    
    handleDragLeave() {
        this.dragging = false;
    }
    
    handleDrop(e) {
        e.preventDefault();
        this.dragging = false;
        this.handleInputChange(e);
    }
    
    handleImageLoad() {
        this.imageLoaded = true;
    }

    handleInputChange(e) {
        console.log(e.dataTransfer.files[0]);
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

        // var pattern = /image-*/;
        var reader = new FileReader();

        // if (!file.type.match(pattern)) {
        //     alert('invalid format');
        //     return;
        // }

        this.loaded = false;

        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    
    _handleReaderLoaded(e) {
        var reader = e.target;
        this.imageSrc = reader.result;
        this.loaded = true;
    }
    
    
}