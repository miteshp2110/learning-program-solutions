
interface WordDocument{
    void openFile();
}

interface PDFDocument{
    void openFile();
}

interface ExcelDocument{
    void openFile();
}

class WordDocumentConcrete implements WordDocument{
    @Override
    public void openFile() {
        System.out.println("Opening a word file");
    }
}

class PdfDocumentConcrete implements PDFDocument{
    @Override
    public void openFile() {
        System.out.println("Opening a pdf file");
    }
}

class ExcelDocumentConcrete implements ExcelDocument{
    @Override
    public void openFile() {
        System.out.println("Opening a excel file");
    }
}

abstract class DocumentFactory{
    public abstract Object createDocument();
}

class WordDocumentFactory extends DocumentFactory {
    @Override
    public WordDocument createDocument() {
        return new WordDocumentConcrete();
    }
}

class PdfDocumentFactory extends DocumentFactory {
    @Override
    public PDFDocument createDocument() {
        return new PdfDocumentConcrete();
    }
}

class ExcelDocumentFactory extends DocumentFactory {
    @Override
    public ExcelDocument createDocument() {
        return new ExcelDocumentConcrete();
    }
}


class Test {
    public static void main(String[] args) {
        WordDocumentFactory wdf = new WordDocumentFactory();
        WordDocument word = wdf.createDocument();
        word.openFile();

        PdfDocumentFactory ppdf = new PdfDocumentFactory();
        PDFDocument pdf = ppdf.createDocument();
        pdf.openFile();

        ExcelDocumentFactory edf = new ExcelDocumentFactory();
        ExcelDocument excel = edf.createDocument();
        excel.openFile();
    }
}