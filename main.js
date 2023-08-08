import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import fs from 'fs';

const text = `
foo  
　baz

foo  
 baz

foo  
&emsp;baz

foo  
&nbsp;baz
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