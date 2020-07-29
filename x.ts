import {Entity, Reference, PrimaryKey, ManyToOne, OneToMany, Collection, MikroORM} from 'mikro-orm';

@Entity()
class Story {
  @PrimaryKey()
  uid!: string;
  @OneToMany(type => Page, page => page.story)
  pages = new Collection<Page>(this);
}

@Entity()
class Page {
  @PrimaryKey()
  uid!: string;
  @ManyToOne(type => Story)
  story!: Reference<Story>;
}

async function main() {
  const orm = await MikroORM.init({
    entities: [Story, Page],
    dbName: `test.db`,
    type: `sqlite`,
  });

  const generator = orm.getSchemaGenerator();
  await generator.updateSchema();

  const story = new Story();
  story.uid = `foo`;
  orm.em.persist(story);

  await orm.em.flush();

  console.log(`ok`);
}

main().catch(err => {
  console.error(err.stack);
  process.exit(1);
});
