import { Component } from '@angular/core';
import sdk from "@stackblitz/sdk";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="sdk-app"

project = {
  files: {
    'index.html': `<h2>Hello there!</h2>`,
    'index.ts': `// I'm empty.`,
    'randomFile.ts': '// You should delete me.'
  },
  title: 'Dynamically Generated Project',
  description: 'Created with <3 by the StackBlitz SDK!',
  template: 'typescript',
  tags: ['stackblitz', 'sdk']
};


// Embed this project
embedNewProject(){
  sdk.embedProject('myDiv', this.project, {
    openFile: 'index.html'
  })
  // Get the VM of the embedded instance
  .then(vm => {
    // Wait 2 seconds...
    setTimeout(()=> {
      // Then update the VM's file system :)
      vm.applyFsDiff({
        create: {
          'index.html': `<h1>This was updated programmatically!</h1>`
        },
        destroy: ['randomFile.ts']
      });
    }, 2000)
  });

}
}
