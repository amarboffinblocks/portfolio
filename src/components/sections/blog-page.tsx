import { SectionWrapper } from '@/components/common/section-wrapper'
import { Container } from '@/components/common/container'
import { BLOG_POSTS } from '@/lib/data/blog'
import { BlogCard } from '@/components/cards/blog-card'
import { BlogPageSectionContent } from '@/types/sections'

export const BlogPageSection = ({ blogs }: BlogPageSectionContent) => {
    return (
        <SectionWrapper >
            <Container>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
                    {blogs?.map((post) => (
                        <BlogCard key={post.slug} {...post} />
                    ))}
                </div>
            </Container>
        </SectionWrapper>
    )
}
