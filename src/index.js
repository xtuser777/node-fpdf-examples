const FPDF = require('node-fpdf')
const pdf = new FPDF('P','mm','A4');

pdf.AddPage();
pdf.SetFont('Arial','B',12);
pdf.Cell(5,5,"HOLA MUNDO!!");
pdf.Output('F',`test.pdf`);