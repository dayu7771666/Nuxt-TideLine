import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    // English content - separate collections for each page
    home_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/home.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          src: z.string(),
          alt: z.string(),
          ctaButton: z.string(),
          features: z.array(
            z.object({
              text: z.string(),
            })
          ),
        }),
        videoShowcase: z.object({
          title: z.string(),
          description: z.string(),
          ctaText: z.string(),
          videoSrc: z.string(),
        }),
        howWorks: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          steps: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        whyUs: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          advantages: z.array(
            z.object({
              name: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        indexCta: z.object({
          title: z.string(),
          description: z.string(),
          cta: z.string(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
        }),
        products: z.object({
          title: z.string(),
          description: z.string(),
          learnMoreText: z.string(),
          quoteText: z.string(),
          learnMoreLink: z.string(),
          quoteLink: z.string(),
          items: z.array(
            z.object({
              id: z.number(),
              name: z.string(),
              href: z.string(),
              description: z.string(),
              imageSrc: z.string(),
              imageAlt: z.string(),
            })
          ),
        }),
        serviceAdvantages: z.object({
          title: z.string(),
          description: z.string(),
          advantages: z.array(
            z.object({
              id: z.number(),
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
        }),
        contactForm: z.object({
          modalTitle: z.string(),
          nameLabel: z.string(),
          namePlaceholder: z.string(),
          emailLabel: z.string(),
          emailPlaceholder: z.string(),
          messageLabel: z.string(),
          messagePlaceholder: z.string(),
          consentText: z.string(),
          submitButton: z.string(),
          successMessage: z.string(),
          errorMessage: z.string(),
        }),
      }),
    }),
    about_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/about.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        quote: z.object({
          text: z.string(),
          author: z.object({
            name: z.string(),
            handle: z.string(),
            avatar: z.string(),
          }),
        }),
        content: z.object({
          intro: z.string(),
          features: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              icon: z.string(),
            })
          ),
          mission: z.string(),
          commitment: z.object({
            title: z.string(),
            description: z.string(),
          }),
        }),
      }),
    }),
    sampling_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/sampling.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          ctaButton: z.string(),
          ctaLink: z.string(),
        }),
        comparison: z.object({
          title: z.string(),
          description: z.string(),
          criteria: z.array(
            z.object({
              name: z.string(),
              standard: z.string(),
              expert: z.string(),
            })
          ),
        }),
        process: z.object({
          title: z.string(),
          description: z.string(),
          steps: z.array(
            z.object({
              number: z.number(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        faq: z.object({
          title: z.string(),
          items: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          button: z.string(),
          link: z.string(),
        }),
      }),
    }),
    bulk_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/bulk.yml',
        prefix: '',
      },
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
        }),
        intro: z.object({
          text: z.string(),
        }),
        process: z.object({
          title: z.string(),
          steps: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        sustainability: z.object({
          title: z.string(),
          description: z.string(),
          features: z.array(
            z.object({
              icon: z.string(),
              title: z.string(),
              description: z.string(),
            })
          ),
        }),
        cta: z.object({
          title: z.string(),
          description: z.string(),
          form: z.object({
            nameLabel: z.string(),
            namePlaceholder: z.string(),
            emailLabel: z.string(),
            emailPlaceholder: z.string(),
            messageLabel: z.string(),
            messagePlaceholder: z.string(),
            consentText: z.string(),
            submitButton: z.string(),
            successMessage: z.string(),
            browseText: z.string(),
            browseLink: z.string(),
          }),
        }),
        meta: z.object({
          title: z.string(),
          description: z.string(),
        }),
      }),
    }),
    terms_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/terms.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        sections: z.object({
          contract_formation: z.object({
            title: z.string(),
            content: z.string(),
          }),
          payment_terms: z.object({
            title: z.string(),
            content: z.string(),
          }),
          shipping: z.object({
            title: z.string(),
            content: z.string(),
          }),
          cancellations: z.object({
            title: z.string(),
            content: z.string(),
          }),
          pricing: z.object({
            title: z.string(),
            content: z.string(),
          }),
          bulk_orders: z.object({
            title: z.string(),
            content: z.string(),
          }),
          claims_returns: z.object({
            title: z.string(),
            content: z.string(),
          }),
          confidentiality: z.object({
            title: z.string(),
            subsections: z.object({
              definition: z.object({
                title: z.string(),
                content: z.string(),
              }),
              obligations: z.object({
                title: z.string(),
                content: z.string(),
              }),
              protection: z.object({
                title: z.string(),
                content: z.string(),
              }),
              duration: z.object({
                title: z.string(),
                content: z.string(),
              }),
              exceptions: z.object({
                title: z.string(),
                content: z.string(),
              }),
              breach: z.object({
                title: z.string(),
                content: z.string(),
              }),
              return_destruction: z.object({
                title: z.string(),
                content: z.string(),
              }),
            }),
          }),
        }),
        footer: z.object({
          consultation: z.string(),
        }),
      }),
    }),
    layout_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/setting/navigation.yml',
        prefix: '',
      },
      schema: z.object({
        tideHeader: z.object({
          categories: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              featured: z.array(
                z.object({
                  name: z.string(),
                  href: z.string(),
                  imageSrc: z.string(),
                  imageAlt: z.string(),
                })
              ),
              sections: z.array(
                z.object({
                  id: z.string(),
                  name: z.string(),
                  items: z.array(
                    z.object({
                      name: z.string(),
                      href: z.string(),
                    })
                  ),
                })
              ),
            })
          ),
          pages: z.array(
            z.union([
              z.object({
                name: z.string(),
                href: z.string(),
              }),
              z.object({
                id: z.string(),
                name: z.string(),
                featured: z.array(
                  z.object({
                    name: z.string(),
                    href: z.string(),
                    imageSrc: z.string(),
                    imageAlt: z.string(),
                  })
                ),
                sections: z.array(
                  z.object({
                    id: z.string(),
                    name: z.string(),
                    items: z.array(
                      z.object({
                        name: z.string(),
                        href: z.string(),
                      })
                    ),
                  })
                ),
              }),
            ])
          ),
        }),
        footer: z.object({
          banner: z.string(),
          contact: z.object({
            whatsapp: z.string(),
            emailLabel: z.string(),
            email: z.string(),
            addressLabel: z.string(),
            address: z.string(),
          }),
          sections: z.object({
            solutions: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
            company: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
            contact: z.object({
              title: z.string(),
              items: z.array(
                z.object({
                  title: z.string(),
                  href: z.string(),
                })
              ),
            }),
          }),
          slogan: z.string(),
          copyright: z.string(),
        }),
      }),
    }),
    marketing_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/marketing.yml',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        items: z.array(
          z.object({
            title: z.string(),
            description: z.string(),
            image: z.string(),
          })
        ),
      }),
    }),
    collections_en: defineCollection({
      type: 'page',
      source: {
        include: 'en/collections/**',
        prefix: '',
      },
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        marketing: z.object({
          title: z.string(),
          description: z.string(),
          items: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
              image: z.string(),
            })
          ),
        }),
        subcategories: z.array(
          z.object({
            name: z.string(),
            href: z.string(),
            products: z.array(
              z.object({
                title: z.string(),
                description: z.string(),
                imageSrc: z.string(),
                imageAlt: z.string(),
                href: z.string(),
              })
            ),
          })
        ),
      }),
    }),

    // Other languages - general collections
    content_ar: defineCollection({
      type: 'page',
      source: {
        include: 'ar/**',
        prefix: '',
      },
    }),
    content_de: defineCollection({
      type: 'page',
      source: {
        include: 'de/**',
        prefix: '',
      },
    }),
    content_es: defineCollection({
      type: 'page',
      source: {
        include: 'es/**',
        prefix: '',
      },
    }),
    content_fr: defineCollection({
      type: 'page',
      source: {
        include: 'fr/**',
        prefix: '',
      },
    }),
    content_hi: defineCollection({
      type: 'page',
      source: {
        include: 'hi/**',
        prefix: '',
      },
    }),
    content_it: defineCollection({
      type: 'page',
      source: {
        include: 'it/**',
        prefix: '',
      },
    }),
    content_ja: defineCollection({
      type: 'page',
      source: {
        include: 'ja/**',
        prefix: '',
      },
    }),
    content_ko: defineCollection({
      type: 'page',
      source: {
        include: 'ko/**',
        prefix: '',
      },
    }),
    content_pt: defineCollection({
      type: 'page',
      source: {
        include: 'pt/**',
        prefix: '',
      },
    }),
    content_ru: defineCollection({
      type: 'page',
      source: {
        include: 'ru/**',
        prefix: '',
      },
    }),
    content_zh: defineCollection({
      type: 'page',
      source: {
        include: 'zh/**',
        prefix: '',
      },
    }),
  },
});
