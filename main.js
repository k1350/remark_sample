import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import fs from 'fs';

const text = `
　Full-width space is inserted at the beginning of the paragraph.  
　Full-width space is inserted at the beginning of the new line.

 Half-width space is inserted at the beginning of the paragraph.  
 Half-width space is inserted at the beginning of the new line.

&emsp;emsp at the beginning of the paragraph.  
&emsp;emsp at the beginning of the new line.

&nbsp;nbsp at the beginning of the paragraph.  
&nbsp;nbsp at the beginning of the new line.
`;

async function main() {
    const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypeStringify)
        .process(text);

    console.log(String(html));

    fs.writeFileSync("converted.html", String(html));
}

main();