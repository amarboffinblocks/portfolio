import { SectionWrapper } from '@/components/common/section-wrapper'
import { Container } from '@/components/common/container'
import { BlogCard } from '@/components/cards/blog-card'
import { BlogItem } from '@/data/sections'

interface BlogPageSectionProps {
    blogs: BlogItem[]
}
export const BlogPageSection = ({ blogs }: BlogPageSectionProps) => {
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
