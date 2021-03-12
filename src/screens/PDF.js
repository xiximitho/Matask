// Import from 'react-native-pdf-lib'
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

// Create a PDF page with text and rectangles

const pngPath = '/storage/emulated/0/Documents/35896.png'

const page1 = PDFPage
  .create()
  .setMediaBox(500, 800)
  .drawText('TESTE LOREM IPSUM /n TESTE LOREM N N N N N N N', {
    x: 5,
    y: 785,
    color: '#000000',
    fontName: "Roboto"
  }).drawRectangle({
    x: 25,
    y: 25,
    width: 150,
    height: 150,
    color: '#FF99CC',
  })
  .drawImage(pngPath, 'png', {
    x: 5,
    y: 300,
    width: 200,
    height: 100,
   });

  export default async() => {
  const docsDir = await PDFLib.getDocumentsDirectory();
  const pdfPath = '/storage/emulated/0/Documents/teste.pdf' ///`${docsDir}/sample.pdf`;
PDFDocument
  .create(pdfPath)
  .addPages(page1)
  .write() // Returns a promise that resolves with the PDF's path
  .then(path => {
    console.warn('PDF created at: ' + path);
    // Do stuff with your shiny new PDF!
  });
}