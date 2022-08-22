import React from 'react';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import {useTranslation} from 'next-i18next';
import {GetStaticProps} from 'next';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'translation'])),
    },
  };
};

const ExamplePage: React.FC = () => {
  const {t} = useTranslation();
  const {t: tt} = useTranslation('translation');
  return (
    <main>
      <div className="text-3xl font-bold underline">
        <p>{t('hello-world')}</p>
        <p>{tt('hello')}</p>
      </div>
    </main>
  );
};

export default ExamplePage;
