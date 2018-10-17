const globby = require('globby');
const fs = require('fs-extra');
const path = require('path');
const frontmatter = require('gray-matter');

const getNumber = str => parseInt(str.match(/^\d+/).shift(), 10);
const toTitle = str => str.split(' ').join('_');

async function main(destination = path.resolve('static/video')) {
  const video = await globby('content/modules/**/*.mp4');

  await fs.ensureDir(destination);

  await Promise.all(
    video.map(async filePath => {
      const unitName = path.basename(path.dirname(filePath));
      const moduleNumber = getNumber(path.basename(filePath));
      const { title: moduleTitle } = await fs
        .readFile(filePath.replace('.mp4', '.md'), 'utf8')
        .then(content => frontmatter(content).data);

      const unitNumber = getNumber(unitName);
      const unitTitle = toTitle(unitName.split('-').pop());
      const unit = path.join(destination, `Unit${unitNumber}-${unitTitle}`);

      await fs.ensureDir(unit);

      const videoFileDestination = path.join(
        unit,
        `U${unitNumber}-M${moduleNumber}-${toTitle(moduleTitle)}.mp4`
      );

      await fs.copy(filePath, videoFileDestination);
    })
  );
}

main();
