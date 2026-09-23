// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import styled from 'styled-components';

const ProductBrandingFreeEditionContainer = styled.span`
    display: flex;
    align-items: center;
`;

const BrandName = styled.span`
    color: rgba(var(--sidebar-text-rgb), 0.9);
    font-family: Metropolis, sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
`;

const ProductBrandingFreeEdition = (): JSX.Element => {
    return (
        <ProductBrandingFreeEditionContainer tabIndex={-1}>
            <BrandName>{'Wyre chat'}</BrandName>
        </ProductBrandingFreeEditionContainer>
    );
};

export default ProductBrandingFreeEdition;
