import fs from "fs";
import sb from "substrings";
import * as createDOMPurify from "dompurify"
import { JSDOM } from "jsdom";
const posts = fs.readdirSync('./posts').filter(r=>r.endsWith('.md'));
const indexedPosts = [];

posts.forEach((name) => {
    const fileContent = fs.readFileSync(`./posts/${name}`, 'utf-8');
    const metadata = sb.getOne("---", "---", fileContent);
    const parsedMetadata = () => {
        const data = metadata.split("\n");
        data.pop();
        data.shift();
        return JSON.parse(JSON.parse(JSON.stringify(`{${data.join(",")}}`)))
    } 
    const { description, id, date } = parsedMetadata();
    const window = new JSDOM('').window;
    const DOMPurify = createDOMPurify.default(window);
    const content = DOMPurify.sanitize(fileContent.slice(metadata.length+6));
    if(!id) throw new Error(`File ${name} does not have an ID`);
    indexedPosts.push({
        description, 
        id,
        date,
        src: `https://raw.githubusercontent.com/frontendkey/frontendkey.github.io/main/src/${id}.txt`
    });
    if(indexedPosts.find(i => i.id == id).length > 1) throw new Error(`Same ID cannot exists twice: ${id}`);
    if(!description) console.log(`\n[MISSING_DESCRIPTION]: ${name}, ID: ${id}`)
    if(!date) console.log(`\n[MISSING_DATE]: ${name}, ID: ${id}`)
    fs.writeFileSync(`./src/${id}.txt`, content.slice(1))
}) 

console.log(`
Indexed ${indexedPosts.length} post(s)

There are total of ${posts.length} file(s)
`)

fs.writeFileSync("./blogPosts.json", JSON.stringify(indexedPosts))
