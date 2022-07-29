import {
  PdfMakeWrapper,
  Canvas,
  Rect,
  Polyline,
  Ellipse,
  Line,
  Txt,
} from 'pdfmake-wrapper';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

PdfMakeWrapper.setFonts(pdfFonts);

const button = document.getElementById('gen-pdf');

button.addEventListener('click', genPDF);

function genPDF() {
  const pdf = new PdfMakeWrapper();

  pdf.pageMargins(0);

  pdf.add(
    new Canvas([
      // Bottom
      new Rect([0, 813], [597, 30]).color('#2E8BC0').lineColor('#2E8BC0').end,

      // Top
      new Polyline([
        { x: 597, y: 0 },
        { x: 597, y: 300 },
        { x: 0, y: 0 },
      ])
        .closePath()
        .color('#2E8BC0')
        .lineColor('#2E8BC0').end,

      new Polyline([
        { x: 0, y: 0 },
        { x: 0, y: 845 },
        { x: 597, y: 0 },
      ])
        .closePath()
        .color('#0C2D48')
        .lineColor('#0C2D48').end,

      // circle
      new Ellipse([100, 90], 50).color('#145DA0').end,

      // Title line
      new Line([200, 745], [540, 745]).lineWidth(8).lineCap('round').end,
    ]).absolutePosition(0, 0).end
  );

  pdf.add(
    new Txt('My Cover Page').fontSize(50).bold().absolutePosition(200, 680).end
  );

  pdf.create().open();
}
